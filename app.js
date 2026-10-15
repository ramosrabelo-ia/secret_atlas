/* ============================================================
   SACRED ATLAS — app.js
   Lógica principal: mapa, filtros, marcadores, rotas, painel de detalhes
   ============================================================ */

'use strict';

// ──────────────────────────────────────────────
// ESTADO
// ──────────────────────────────────────────────
const State = {
  activeReligions: new Set(Object.keys(RELIGION_COLORS)),
  activeEventTypes: new Set(Object.keys(EVENT_TYPES)),
  activeCertainty:  new Set(Object.keys(CERTAINTY_LEVELS)),
  activeRoutes:     new Set(SACRED_ROUTES.map(r => r.id)),
  periodStart: -3300,
  periodEnd:    2026,
  searchQuery:  '',
  activeLayers: new Set(['traditions','missions','changes']),
  region: 'para', people:'all', includeTimeless:true,
  map:          null,
  markers:      [],
  routeLayers:  [],
  markerGroup:  null,
  routeGroup:   null,
  tileLayers:   {},
  activeMarker: null,
};

// ──────────────────────────────────────────────
// MAPA
// ──────────────────────────────────────────────
function initMap() {
  const cartoDark = L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    { maxZoom: 19, attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>' }
  );
  const cartoSepia = L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    { maxZoom: 19, attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>' }
  );

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  State.map = L.map('map', {
    center: [-3.5, -53.5], zoom: 5, minZoom: 2, maxZoom: 15,
    zoomControl: false, attributionControl: true,
    layers: [isDark ? cartoDark : cartoSepia]
  });

  State.tileLayers = { dark: cartoDark, light: cartoSepia };
  L.control.zoom({position:'bottomright'}).addTo(State.map);
  L.control.scale({position:'bottomleft', imperial:false}).addTo(State.map);
  let tileFailures=0;
  for(const tiles of [cartoSepia,cartoDark]) {
    tiles.on('tileerror',()=>{if(++tileFailures>4)document.getElementById('map-error').hidden=false;});
    tiles.on('tileload',()=>{tileFailures=0;document.getElementById('map-error').hidden=true;});
  }

  if (L.control.fullscreen) {
    L.control.fullscreen({ position: 'topright', title: 'Tela cheia' }).addTo(State.map);
  }

  State.markerGroup = L.layerGroup().addTo(State.map);
  State.routeGroup  = L.layerGroup().addTo(State.map);

  // Fechar painel ao clicar no mapa
  State.map.on('click', closeDetailPanel);
}

// ──────────────────────────────────────────────
// ÍCONE DO MARCADOR
// ──────────────────────────────────────────────
function createMarkerIcon(feature, selected = false) {
  const p = feature.properties;
  const colorInfo = RELIGION_COLORS[p.color_key] || { primary: '#999' };
  const size = p.reviewed ? 16 : getMarkerSize(p.certainty);
  const ring = selected
    ? `box-shadow:0 0 0 3px ${colorInfo.primary},0 2px 10px rgba(0,0,0,0.45);transform:scale(1.2);`
    : 'box-shadow:0 1px 6px rgba(0,0,0,0.32),0 0 0 0.5px rgba(0,0,0,0.12);';

  return L.divIcon({
    className: '',
    html: `<div class="sacred-marker ${p.geo_kind === 'region' ? 'regional-marker' : ''}" style="
      width:${size}px;height:${size}px;
      background:${colorInfo.primary};
      border:2px solid rgba(255,255,255,0.9);
      border-radius:50%;
      cursor:pointer;
      transition:transform 140ms ease,box-shadow 140ms ease;
      ${ring}
    " title="${escHtml(p.event)}"></div>`,
    iconSize:  [size, size],
    iconAnchor:[size/2, size/2],
  });
}

function getMarkerSize(certainty) {
  switch (certainty) {
    case 'histórico bem documentado':  return 14;
    case 'tradição religiosa':         return 12;
    case 'hipótese acadêmica':         return 10;
    case 'local simbólico':            return 10;
    case 'tradição oral':              return 11;
    case 'interpretação arqueológica': return 11;
    default:                           return 11;
  }
}

// ──────────────────────────────────────────────
// PAINEL DE DETALHES
// ──────────────────────────────────────────────
function openDetailPanel(feature, marker) {
  const p = feature.properties;
  const colorInfo = RELIGION_COLORS[p.color_key] || { primary: '#999', name: p.religion };
  const cert = CERTAINTY_LEVELS[p.certainty] || { badge: p.certainty, color: '#666', bg: '#eee' };

  const panel  = document.getElementById('detail-panel');
  const topbar = document.getElementById('dp-topbar');

  // Topbar com tint da tradição
  topbar.style.background   = colorInfo.primary + '20';
  topbar.style.borderBottom = `1px solid ${colorInfo.primary}40`;
  panel.style.borderTopColor = colorInfo.primary;

  // Tag da tradição
  const tag = document.getElementById('dp-religion-tag');
  tag.textContent       = colorInfo.name;
  tag.style.background  = colorInfo.primary;

  // Período, título, local
  document.getElementById('dp-period').textContent      = p.period;
  document.getElementById('dp-title').textContent       = p.event;
  document.getElementById('dp-location').textContent    = `◈ ${p.location} · ${p.country}`;
  document.getElementById('dp-description').textContent = p.description;
  const google=document.getElementById('dp-google');
  const [lng,lat]=feature.geometry.coordinates;
  google.href=`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  google.hidden=false;


  // Certeza
  const certEl = document.getElementById('dp-certainty');
  certEl.textContent    = cert.badge;
  certEl.style.background = cert.bg;
  certEl.style.color      = cert.color;

  // Controvérsia
  const contrDiv = document.getElementById('dp-controversy');
  if (p.controversy) {
    document.getElementById('dp-controversy-text').textContent = p.controversy;
    contrDiv.style.display = 'block';
  } else {
    contrDiv.style.display = 'none';
  }

  // Fonte
  const srcEl    = document.getElementById('dp-source');
  const srcLink  = p.source_url
    ? `<a href="${escHtml(p.source_url)}" target="_blank" rel="noopener">${escHtml(p.source)}</a>`
    : escHtml(p.source);
  srcEl.innerHTML = `<strong>Fonte</strong>${srcLink}`;

  renderV2Detail(p);

  // Scroll ao topo
  const body = panel.querySelector('.dp-body');
  if (body) body.scrollTop = 0;

  // Abrir
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');

  // Highlight no marcador
  if (State.activeMarker && State.activeMarker !== marker) {
    const prev = State.markers.find(m => m.marker === State.activeMarker);
    if (prev) prev.marker.setIcon(createMarkerIcon(prev.feature, false));
  }
  State.activeMarker = marker;
  marker.setIcon(createMarkerIcon(feature, true));
}

function closeDetailPanel() {
  const panel = document.getElementById('detail-panel');
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');

  if (State.activeMarker) {
    const prev = State.markers.find(m => m.marker === State.activeMarker);
    if (prev) prev.marker.setIcon(createMarkerIcon(prev.feature, false));
    State.activeMarker = null;
  }
}

// ──────────────────────────────────────────────
// RENDERIZAR MARCADORES
// ──────────────────────────────────────────────
function renderMarkers() {
  State.markerGroup.clearLayers();
  State.markers = [];
  State.activeMarker = null;
  closeDetailPanel();

  let count = 0;
  const q = normalizeSearch(State.searchQuery);

  SACRED_DATA.features.forEach(feature => {
    const p = feature.properties;

    if (!State.activeReligions.has(p.color_key))   return;
    if (!State.activeEventTypes.has(p.event_type)) return;
    if (!State.activeCertainty.has(p.certainty))   return;
    if(!State.activeLayers.has(p.layer||'traditions'))return;
    if(State.region!=='all'&&!(p.regions||[]).includes(State.region))return;
    if(State.people!=='all'&&p.people!==State.people)return;
    if(p.timeless&&!State.includeTimeless)return;
    if(!p.timeless&&(p.period_start>State.periodEnd||p.period_end<State.periodStart))return;
    if (q && !normalizeSearch(`${p.event} ${p.location} ${p.religion} ${p.description}`).includes(q)) return;

    const [lng, lat] = feature.geometry.coordinates;
    const icon   = createMarkerIcon(feature, false);
    const marker = L.marker([lat, lng], { icon });

    marker.on('click', (e) => {
      L.DomEvent.stopPropagation(e);
      openDetailPanel(feature, marker);
    });

    State.markerGroup.addLayer(marker);
    State.markers.push({ feature, marker });
    count++;
  });

  document.getElementById('stats-count').textContent = count;
  renderRoutes();
  renderSearchResults();
}

// ──────────────────────────────────────────────
// RENDERIZAR ROTAS
// ──────────────────────────────────────────────
function renderRoutes() {
  State.routeGroup.clearLayers();
  State.routeLayers = [];

  SACRED_ROUTES.forEach(route => {
    if (!State.activeRoutes.has(route.id)) return;
    if(!State.activeLayers.has('traditions')||State.region!=='all'||State.people!=='all'||State.searchQuery)return;
    if (!Object.entries(RELIGION_COLORS).some(([key,info])=>info.name===route.religion && State.activeReligions.has(key))) return;

    const latlngs = route.coordinates.map(([lng, lat]) => [lat, lng]);
    const line = L.polyline(latlngs, {
      color:       route.color,
      weight:      2.5,
      opacity:     0.65,
      dashArray:   route.certainty === 'histórico bem documentado' ? null : '6,4',
      smoothFactor: 2
    });

    line.on('click', (e) => {
      L.DomEvent.stopPropagation(e);
      // Abrir painel com info da rota
      const panel  = document.getElementById('detail-panel');
      const topbar = document.getElementById('dp-topbar');
      topbar.style.background    = route.color + '20';
      topbar.style.borderBottom  = `1px solid ${route.color}40`;
      panel.style.borderTopColor  = route.color;

      const tag = document.getElementById('dp-religion-tag');
      tag.textContent      = route.religion;
      tag.style.background = route.color;

      document.getElementById('dp-period').textContent   = route.certainty;
      document.getElementById('dp-title').textContent    = route.name;
      document.getElementById('dp-location').textContent = '';
      document.getElementById('dp-description').textContent = route.description;

      const certEl = document.getElementById('dp-certainty');
      const cert = CERTAINTY_LEVELS[route.certainty] || { badge: route.certainty, color: '#666', bg: '#eee' };
      certEl.textContent      = cert.badge;
      certEl.style.background = cert.bg;
      certEl.style.color      = cert.color;

      document.getElementById('dp-controversy').style.display = 'none';
      document.getElementById('dp-meta').replaceChildren();
      document.getElementById('dp-source').textContent = 'Rota esquemática do arquivo original. Sem fonte específica vinculada.';
      document.getElementById('dp-google').hidden=true;

      const body = panel.querySelector('.dp-body');
      if (body) body.scrollTop = 0;

      panel.classList.add('open');
      panel.setAttribute('aria-hidden', 'false');
    });

    State.routeGroup.addLayer(line);
    State.routeLayers.push({ route, layer: line });
  });
}

// ──────────────────────────────────────────────
// FILTROS — TRADIÇÕES
// ──────────────────────────────────────────────
function buildReligionFilters() {
  const container = document.getElementById('religion-filters');
  container.innerHTML = '';

  const counts = {};
  SACRED_DATA.features.forEach(f => {
    const k = f.properties.color_key;
    counts[k] = (counts[k] || 0) + 1;
  });

  Object.entries(RELIGION_COLORS).forEach(([key, info]) => {
    const isActive = State.activeReligions.has(key);
    const item = document.createElement('button');
    item.type='button';
    item.className = `religion-item ${isActive ? '' : 'disabled'}`;
    item.dataset.key = key;
    item.setAttribute('aria-pressed',String(isActive));
    item.innerHTML = `
      <span class="religion-symbol">${info.icon}</span>
      <span class="religion-name">${info.name}</span>
      <span class="religion-count">${counts[key] || 0}</span>`;

    item.addEventListener('click', () => {
      if (State.activeReligions.has(key)) {
        State.activeReligions.delete(key);
        item.classList.add('disabled');
      } else {
        State.activeReligions.add(key);
        item.classList.remove('disabled');
      }
      item.setAttribute('aria-pressed',String(State.activeReligions.has(key)));
      renderMarkers();
    });
    container.appendChild(item);
  });
}

// ──────────────────────────────────────────────
// FILTROS — TIPO DE EVENTO
// ──────────────────────────────────────────────
function buildEventTypeFilters() {
  const container = document.getElementById('event-type-filters');
  container.innerHTML = '';

  Object.entries(EVENT_TYPES).forEach(([key, info]) => {
    const isActive = State.activeEventTypes.has(key);
    const chip = document.createElement('label');
    chip.className = `filter-chip ${isActive ? '' : 'disabled'}`;
    chip.innerHTML = `
      <input type="checkbox" ${isActive ? 'checked' : ''} data-key="${key}" />
      <span class="filter-chip-label">${info.icon} ${info.label}</span>`;

    chip.querySelector('input').addEventListener('change', e => {
      if (e.target.checked) { State.activeEventTypes.add(key); chip.classList.remove('disabled'); }
      else                  { State.activeEventTypes.delete(key); chip.classList.add('disabled'); }
      renderMarkers();
    });
    container.appendChild(chip);
  });
}

// ──────────────────────────────────────────────
// FILTROS — CERTEZA
// ──────────────────────────────────────────────
function buildCertaintyFilters() {
  const container = document.getElementById('certainty-filters');
  container.innerHTML = '';

  Object.entries(CERTAINTY_LEVELS).forEach(([key, info]) => {
    const isActive = State.activeCertainty.has(key);
    const chip = document.createElement('label');
    chip.className = `filter-chip ${isActive ? '' : 'disabled'}`;
    chip.innerHTML = `
      <input type="checkbox" ${isActive ? 'checked' : ''} data-key="${key}" />
      <span class="certainty-badge" style="background:${info.color}"></span>
      <span class="filter-chip-label">${info.badge}</span>`;

    chip.querySelector('input').addEventListener('change', e => {
      if (e.target.checked) { State.activeCertainty.add(key); chip.classList.remove('disabled'); }
      else                  { State.activeCertainty.delete(key); chip.classList.add('disabled'); }
      renderMarkers();
    });
    container.appendChild(chip);
  });
}

// ──────────────────────────────────────────────
// FILTROS — ROTAS
// ──────────────────────────────────────────────
function buildRouteFilters() {
  const container = document.getElementById('route-filters');
  container.innerHTML = '';

  SACRED_ROUTES.forEach(route => {
    const isActive = State.activeRoutes.has(route.id);
    const item = document.createElement('button');
    item.type='button';
    item.className = `route-item ${isActive ? '' : 'disabled'}`;
    item.dataset.id = route.id;
    item.innerHTML = `
      <span class="route-line" style="background:${route.color}"></span>
      <span class="route-name">${route.name}</span>`;

    item.addEventListener('click', () => {
      if (State.activeRoutes.has(route.id)) {
        State.activeRoutes.delete(route.id);
        item.classList.add('disabled');
      } else {
        State.activeRoutes.add(route.id);
        item.classList.remove('disabled');
      }
      renderRoutes();
    });
    container.appendChild(item);
  });
}

// ──────────────────────────────────────────────
// LINHA DO TEMPO
// ──────────────────────────────────────────────
const ERAS = [
  { label: '3300–1200 a.C.',  start: -3300, end: -1200 },
  { label: 'Antiguidade I', start: -1200, end: -500  },
  { label: 'Antiguidade II',start:  -500, end:  0    },
  { label: 'Séc. I–V',      start:     0, end:  500  },
  { label: 'Séc. VI–X',     start:   500, end: 1000  },
  { label: 'Séc. XI–XV',    start:  1000, end: 1500  },
  { label: 'Séc. XVI–XIX',  start:  1500, end: 1900  },
  { label: 'Séc. XX–XXI',   start:  1900, end: 2026  },
];

function buildTimeline() {
  const track = document.getElementById('timeline-track');
  track.innerHTML = '';
  ERAS.forEach(era => {
    const el = document.createElement('button');
    el.type='button';
    el.className = 'timeline-era';
    el.innerHTML = `<span class="timeline-era-label">${era.label}</span>`;
    el.title = `${formatYear(era.start)} – ${formatYear(era.end)}`;
    el.addEventListener('click', () => {
      State.periodStart = era.start;
      State.periodEnd   = era.end;
      updatePeriodUI();
      renderMarkers();
      highlightEra(era);
    });
    track.appendChild(el);
    era._el = el;
  });
  highlightEra(null);
}

function highlightEra(active) {
  ERAS.forEach(e => e._el && e._el.classList.toggle('active', e === active));
}

// ──────────────────────────────────────────────
// PERÍODO
// ──────────────────────────────────────────────
function initPeriodControls() {
  const rs = document.getElementById('range-start');
  const re = document.getElementById('range-end');

  rs.addEventListener('input', () => {
    let v = parseInt(rs.value);
    if (v >= State.periodEnd) v = Math.max(-3300,State.periodEnd - 1);
    State.periodStart = v; rs.value = v;
    updatePeriodUI(); renderMarkers(); highlightEra(null);
  });

  re.addEventListener('input', () => {
    let v = parseInt(re.value);
    if (v <= State.periodStart) v = Math.min(2026,State.periodStart + 1);
    State.periodEnd = v; re.value = v;
    updatePeriodUI(); renderMarkers(); highlightEra(null);
  });

  document.querySelectorAll('.period-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      State.periodStart = parseInt(btn.dataset.start);
      State.periodEnd   = parseInt(btn.dataset.end);
      updatePeriodUI(); renderMarkers();
      document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      highlightEra(null);
    });
  });
}

function updatePeriodUI() {
  document.getElementById('period-label-start').textContent = formatYear(State.periodStart);
  document.getElementById('period-label-end').textContent   = formatYear(State.periodEnd);
  document.getElementById('range-start').value = State.periodStart;
  document.getElementById('range-end').value   = State.periodEnd;
}

function formatYear(y) {
  if (y < 0) return `${Math.abs(y)} a.C.`;
  if (y === 0) return '1 d.C.';
  return `${y} d.C.`;
}

// ──────────────────────────────────────────────
// BUSCA
// ──────────────────────────────────────────────
function initSearch() {
  const input   = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear');

  input.addEventListener('input', () => {
    State.searchQuery = input.value.trim();
    clearBtn.style.display = State.searchQuery ? 'block' : 'none';
    renderMarkers();
  });

  clearBtn.addEventListener('click', () => {
    input.value = ''; State.searchQuery = '';
    clearBtn.style.display = 'none';
    renderMarkers();
  });
}

// ──────────────────────────────────────────────
// BOTÕES TODAS / NENHUMA
// ──────────────────────────────────────────────
function initBulkButtons() {
  document.getElementById('btn-all-on').addEventListener('click', () => {
    Object.keys(RELIGION_COLORS).forEach(k => State.activeReligions.add(k));
    buildReligionFilters(); renderMarkers();
  });
  document.getElementById('btn-all-off').addEventListener('click', () => {
    State.activeReligions.clear();
    buildReligionFilters(); renderMarkers();
  });
  document.getElementById('btn-routes-toggle').addEventListener('click', function() {
    const allOn = SACRED_ROUTES.every(r => State.activeRoutes.has(r.id));
    if (allOn) { State.activeRoutes.clear(); this.textContent = 'Mostrar'; }
    else       { SACRED_ROUTES.forEach(r => State.activeRoutes.add(r.id)); this.textContent = 'Ocultar'; }
    buildRouteFilters(); renderRoutes();
  });
}

// ──────────────────────────────────────────────
// TEMA
// ──────────────────────────────────────────────
function initThemeToggle() {
  const btn  = document.getElementById('theme-toggle');
  const html = document.documentElement;

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    if (isDark) {
      if (State.tileLayers.light) State.map.removeLayer(State.tileLayers.light);
      State.map.addLayer(State.tileLayers.dark);
    } else {
      State.map.removeLayer(State.tileLayers.dark);
      State.map.addLayer(State.tileLayers.light);
    }
    btn.innerHTML = isDark
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  }

  btn.addEventListener('click', () => {
    applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
}

// ──────────────────────────────────────────────
// MODAL DE AJUDA
// ──────────────────────────────────────────────
function initHelp() {
  const modal   = document.getElementById('help-modal');
  const openBtn  = document.getElementById('btn-help');
  const closeBtn = document.getElementById('modal-close');
  openBtn.addEventListener('click',  () => modal.style.display = 'flex');
  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.style.display = 'none'; });
}

// ──────────────────────────────────────────────
// PAINEL DE DETALHES — botão fechar
// ──────────────────────────────────────────────
function initDetailPanel() {
  document.getElementById('dp-close').addEventListener('click', (e) => {
    e.stopPropagation();
    closeDetailPanel();
  });
}

// ──────────────────────────────────────────────
// SIDEBAR MOBILE
// ──────────────────────────────────────────────
function initSidebarToggle() {
  const sidebar = document.getElementById('sidebar');
  const btn     = document.getElementById('sidebar-toggle');
  btn.addEventListener('click', () => sidebar.classList.toggle('open'));
  document.getElementById('map').addEventListener('click', () => {
    if (window.innerWidth <= 768) sidebar.classList.remove('open');
  });
}

// ──────────────────────────────────────────────
// HELPER
// ──────────────────────────────────────────────
function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ──────────────────────────────────────────────
// BOOTSTRAP
// ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if(typeof L==='undefined') {document.getElementById('map-error').hidden=false;document.getElementById('map-error').textContent='Não foi possível carregar a biblioteca do mapa. Verifique a conexão e recarregue a página.';return;}
  initMap();
  buildReligionFilters();
  buildEventTypeFilters();
  buildCertaintyFilters();
  buildRouteFilters();
  buildTimeline();
  initPeriodControls();
  initSearch();
  initBulkButtons();
  initThemeToggle();
  initHelp();
  initDetailPanel();
  initSidebarToggle();

  renderMarkers();
  renderRoutes();
  updatePeriodUI();
  initRefinements();
  initV2();
});

function normalizeSearch(value){return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();}
function renderSearchResults(){
 const box=document.getElementById('search-results');box.replaceChildren();
 if(!State.searchQuery)return;
 if(!State.markers.length){box.textContent='Nenhum lugar encontrado com esses filtros.';return;}
 State.markers.slice(0,12).forEach(({feature,marker})=>{
 const button=document.createElement('button');button.className='search-result';
 const title=document.createElement('strong');title.textContent=feature.properties.location;
 const subtitle=document.createElement('span');subtitle.textContent=feature.properties.event;
 button.append(title,subtitle);button.onclick=()=>{State.map.flyTo(marker.getLatLng(),8);openDetailPanel(feature,marker);document.getElementById('sidebar').classList.remove('open');};box.append(button);
 });
 if(State.markers.length>12){const note=document.createElement('p');note.textContent='Mostrando 12 resultados. Refine a busca para encontrar mais lugares.';box.append(note);}
}
function initRefinements(){
 document.getElementById('more-traditions').onclick=function(){const list=document.getElementById('religion-filters');const expanded=list.classList.toggle('expanded');this.setAttribute('aria-expanded',expanded);this.textContent=expanded?'Menos tradições ↑':'Mais tradições ↓';};
 document.getElementById('fit-results').onclick=()=>{if(State.markers.length)State.map.fitBounds(L.latLngBounds(State.markers.map(x=>x.marker.getLatLng())),{padding:[40,40],maxZoom:9});};
 document.getElementById('reset-view').onclick=()=>State.map.flyTo([20,15],2);
 document.getElementById('nav-about').onclick=()=>document.getElementById('btn-help').click();
 document.getElementById('nav-routes').onclick=()=>{const sidebar=document.getElementById('sidebar');sidebar.classList.add('open');document.getElementById('route-filters').scrollIntoView({behavior:'smooth',block:'center'});};
 document.getElementById('nav-explore').onclick=()=>{document.getElementById('sidebar').scrollTo({top:0,behavior:'smooth'});closeDetailPanel();};
 document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key==='k'){e.preventDefault();document.getElementById('sidebar').classList.add('open');document.getElementById('search-input').focus();}if(e.key==='Escape'){closeDetailPanel();document.getElementById('sidebar').classList.remove('open');}});
 const resize=new ResizeObserver(()=>State.map.invalidateSize());resize.observe(document.getElementById('map'));
}
