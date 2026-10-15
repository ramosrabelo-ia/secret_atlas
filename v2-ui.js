function renderV2Detail(p){
 const meta=document.getElementById('dp-meta');meta.replaceChildren();
 const text=document.createElement('p');text.textContent=p.geo_note||'Localização herdada da V1; precisão não revisada nesta atualização.';meta.append(text);
 if(p.people){const t=document.createElement('p');t.textContent='Povo / recorte: '+p.people;meta.append(t);}
 if(p.reviewed){const t=document.createElement('p');t.textContent='Fontes consultadas em '+p.reviewed+' · síntese editorial, sem validação comunitária.';meta.append(t);}
 if(p.sources){const box=document.getElementById('dp-source');box.replaceChildren();const title=document.createElement('strong');title.textContent='Fontes e autoria';box.append(title);p.sources.forEach(s=>{const a=document.createElement('a');a.href=s.url;a.textContent=s.name+' ↗';a.target='_blank';a.rel='noopener';box.append(a);});}
}
function initV2(){
 const labels={traditions:'Povos e tradições',missions:'Missões e colonização',changes:'Transformações religiosas',present:'Religiões no presente'};
 const box=document.getElementById('layer-controls');
 Object.entries(labels).forEach(([key,name])=>{const label=document.createElement('label');label.className='layer-control';const c=document.createElement('input');c.type='checkbox';c.checked=State.activeLayers.has(key);c.onchange=()=>{c.checked?State.activeLayers.add(key):State.activeLayers.delete(key);renderMarkers();};const t=document.createElement('span');t.textContent=name;label.append(c,t);box.append(label);});
 const people=document.getElementById('people-select');[...new Set(SACRED_DATA.features.map(f=>f.properties.people).filter(Boolean))].sort().forEach(name=>{const option=document.createElement('option');option.value=name;option.textContent=name;people.append(option);});
 people.onchange=()=>{State.people=people.value;renderMarkers();};
 const region=document.getElementById('region-select');const views={all:[[20,15],2,'Territórios de memória','Explore lugares, épocas e narrativas.'],para:[[-3.5,-53.5],5,'Pará: territórios e encontros','Povos, missões e permanências religiosas.'],amazon:[[-2,-61],4,'Amazônias, no plural','Povos e modos de conhecer o território.'],japan:[[32,131],6,'Japão: missões e cristãos ocultos','Contato missionário não é domínio colonial.'],brazil:[[-14,-52],4,'Brasil: religião declarada','Censo 2022 · pessoas de 10 anos ou mais.']};
 region.onchange=()=>{State.region=region.value;State.people='all';people.value='all';const [center,zoom,title,subtitle]=views[State.region];State.map.flyTo(center,zoom);document.querySelector('.map-intro h2').textContent=title;document.querySelector('.map-intro p').textContent=subtitle;if(State.region==='brazil'){State.activeLayers.add('present');box.querySelectorAll('input').forEach((c,i)=>c.checked=State.activeLayers.has(Object.keys(labels)[i]));}renderMarkers();};
 document.getElementById('include-timeless').onchange=e=>{State.includeTimeless=e.target.checked;renderMarkers();};
 document.getElementById('all-time').onclick=()=>{State.periodStart=-3300;State.periodEnd=2026;updatePeriodUI();highlightEra(null);document.querySelectorAll('.period-btn').forEach(b=>b.classList.remove('active'));renderMarkers();};
 const dialog=document.getElementById('comparison-dialog');
 document.getElementById('comparison-content').innerHTML=comparisonMarkup();
 let returnFocus=null;function open(e){returnFocus=e.currentTarget;dialog.showModal();document.getElementById('comparison-close').focus();}
 document.getElementById('nav-compare').onclick=()=>document.getElementById('v2-section').scrollIntoView({behavior:'smooth'});document.getElementById('compare-open').onclick=open;document.getElementById('reading-comparison').onclick=open;
 buildStudySequence();
 document.getElementById('comparison-close').onclick=()=>dialog.close();dialog.addEventListener('close',()=>returnFocus?.focus());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
}
function comparisonMarkup(){
 const s=ATLAS_V2.sources;const link=k=>`<a href="${s[k].url}" target="_blank" rel="noopener">${s[k].name} ↗</a>`;
 return `<span class="v2-kicker">CADERNO DE LEITURA · VERSÃO 2</span><h2 id="comparison-title">O mesmo oceano.<br>Histórias diferentes.</h2><p class="reading-lead">Como missões, governos e comunidades transformaram a paisagem religiosa? Pará e Japão oferecem uma comparação — não uma trajetória universal.</p><div class="comparison-grid"><section><h3>Pará · ocupação e pluralidade</h3><p>Em Belém, forte, capela e administração integraram a ocupação colonial. Jesuítas participaram de disputas políticas, econômicas e sobre o trabalho indígena. O Diretório alterou o governo dos aldeamentos. A presença franciscana no Tapajós mostra outra trajetória missionária.</p><p>A devoção do Círio e as práticas indígenas não são etapas de uma substituição linear. Permanências e transformações precisam ser estudadas em cada comunidade.</p><div class="reading-sources">${link('belem')}${link('jesuitas')}${link('diretorio')}${link('munduruku')}${link('cirio')}</div></section><section><h3>Japão · missão sem colônia portuguesa</h3><p>Xavier chegou a Kagoshima em 1549 com Anjiro e companheiros. Interlocutores e autoridades japonesas participaram da história missionária. Nos séculos seguintes, comunidades mantiveram práticas cristãs sob proibição. A UNESCO registra o fim oficial da proibição em 1873.</p><p>Há conexão com redes de expansão europeia, mas não equivalência com o domínio territorial colonial no Brasil.</p><div class="reading-sources">${link('xavier')}${link('japao')}</div></section></div><section class="census-note"><span class="v2-kicker">PRESENTE NÃO É CONSEQUÊNCIA AUTOMÁTICA</span><h3>56,7% · Brasil, Censo 2022</h3><p>Católicos apostólicos romanos entre pessoas de 10 anos ou mais, nos resultados preliminares da amostra. Esse é um indicador nacional de autodeclaração. Não é percentual do Pará, não mede prática religiosa e não estabelece causalidade histórica.</p><p>O percentual estadual do Pará permanece pendente de validação e não foi estimado.</p>${link('ibge')}</section><section><h3>Como ler este mapa</h3><p>As fichas novas identificam povo, fonte e recorte. Losangos marcam referências regionais aproximadas; não delimitam Terras Indígenas e não identificam aldeias ou lugares sagrados com precisão. Sem uma fonte cartográfica validada, o atlas não desenha polígonos territoriais.</p><p>Tradições vivas sem data de origem podem permanecer visíveis ao navegar pela cronologia. Data de registro patrimonial, data de publicação e tempo ancestral são coisas diferentes.</p><p>Não foram desenhadas novas rotas internacionais: uma linha entre pontos não demonstraria o percurso histórico real. Os registros anteriores fora do recorte da V2 continuam sujeitos à revisão.</p></section>`;
}

function scrollToAtlas(){document.querySelector('.app-header').scrollIntoView({behavior:'smooth'});State.map.invalidateSize();}
function syncStudyLayers(){const keys=['traditions','missions','changes','present'];document.querySelectorAll('#layer-controls input').forEach((c,i)=>c.checked=State.activeLayers.has(keys[i]));}
function buildStudySequence(){
 const list=document.getElementById('v2-records');
 SACRED_DATA.features.filter(f=>f.properties.reviewed).forEach(feature=>{
 const p=feature.properties,card=document.createElement('article');card.className='study-card';
 const tag=document.createElement('span');tag.className='v2-kicker';tag.textContent=p.people||p.religion;
 const title=document.createElement('h3');title.textContent=p.event;
 const summary=document.createElement('p');summary.textContent=p.description;
 const button=document.createElement('button');button.textContent='Explorar no mapa ↗';button.onclick=()=>{
 State.region='all';State.people='all';State.searchQuery='';State.periodStart=-3300;State.periodEnd=2026;State.includeTimeless=true;
 State.activeLayers.add(p.layer);State.activeReligions.add(p.color_key);State.activeEventTypes.add(p.event_type);State.activeCertainty.add(p.certainty);
 document.getElementById('region-select').value='all';document.getElementById('people-select').value='all';document.getElementById('include-timeless').checked=true;document.getElementById('search-input').value='';document.getElementById('search-clear').style.display='none';
 buildReligionFilters();buildEventTypeFilters();buildCertaintyFilters();syncStudyLayers();updatePeriodUI();highlightEra(null);renderMarkers();
 document.querySelector('.map-intro h2').textContent='Territórios de memória';document.querySelector('.map-intro p').textContent='Explore lugares, épocas e narrativas.';
 const entry=State.markers.find(x=>x.feature.properties.id===p.id);if(entry){State.map.flyTo(entry.marker.getLatLng(),p.geo_kind==='region'?6:8);openDetailPanel(entry.feature,entry.marker);}document.getElementById('sidebar').classList.remove('open');scrollToAtlas();
 };
 card.append(tag,title,summary,button);list.append(card);
 });
 document.getElementById('back-map').onclick=scrollToAtlas;
 document.querySelectorAll('[data-study]').forEach(b=>b.onclick=()=>{State.activeLayers=new Set(['traditions','missions','changes']);syncStudyLayers();const select=document.getElementById('region-select');select.value=b.dataset.study;select.onchange();scrollToAtlas();});
}
