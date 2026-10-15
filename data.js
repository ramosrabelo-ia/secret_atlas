// ============================================================
// SACRED ATLAS — Base de Dados das Tradições Religiosas
// Formato: GeoJSON Feature Collection
// Cada feature tem propriedades com metadados detalhados
// ============================================================

const SACRED_DATA = {
  type: "FeatureCollection",
  features: [

    // =========================================================
    // CRISTIANISMO
    // =========================================================
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [35.2007, 31.7043] },
      properties: {
        id: "chr_001",
        religion: "Cristianismo",
        subtradition: "Nascimento de Jesus",
        event: "Nascimento de Jesus de Nazaré",
        location: "Belém",
        country: "Palestina/Israel (atual)",
        period: "c. 4 a.C.–6 d.C.",
        period_start: -4,
        period_end: 6,
        event_type: "nascimento",
        description: "Segundo os Evangelhos de Mateus e Lucas, Jesus nasceu em Belém da Judeia. A data exata e o local preciso são objeto de debate histórico.",
        source: "Evangelhos de Mateus 2:1 e Lucas 2:4-7; World History Encyclopedia",
        source_url: "https://www.worldhistory.org/Bethlehem/",
        certainty: "tradição religiosa",
        controversy: "Historiadores debatem se Belém ou Nazaré era o local de nascimento real. A menção nos Evangelhos pode refletir cumprimento de profecias (Miquéias 5:2). Arqueologia não confirmou diretamente o evento.",
        color_key: "christianity"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [35.3030, 32.7021] },
      properties: {
        id: "chr_002",
        religion: "Cristianismo",
        subtradition: "Infância e juventude de Jesus",
        event: "Crescimento de Jesus em Nazaré",
        location: "Nazaré",
        country: "Israel (atual)",
        period: "c. 4 a.C.–27 d.C.",
        period_start: -4,
        period_end: 27,
        event_type: "local sagrado",
        description: "Jesus cresceu em Nazaré, na Galileia, sendo identificado como 'Jesus de Nazaré' ao longo dos Evangelhos. Escavações arqueológicas confirmaram assentamento judaico do período.",
        source: "Lucas 2:39-52; Encyclopaedia Britannica — Nazareth",
        source_url: "https://www.britannica.com/place/Nazareth",
        certainty: "histórico bem documentado",
        controversy: "A existência histórica de um assentamento em Nazaré no século I é confirmada pela arqueologia, embora pequeno.",
        color_key: "christianity"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [35.5518, 32.0853] },
      properties: {
        id: "chr_003",
        religion: "Cristianismo",
        subtradition: "Batismo",
        event: "Batismo de Jesus no Rio Jordão",
        location: "Rio Jordão (Qasr el-Yahud / Betânia além do Jordão)",
        country: "Israel/Jordânia (atual)",
        period: "c. 27–29 d.C.",
        period_start: 27,
        period_end: 29,
        event_type: "revelação",
        description: "João Batista teria batizado Jesus no Rio Jordão. Dois locais são disputados: Qasr el-Yahud (lado israelense) e Betânia além do Jordão (Jordânia), este último reconhecido pela UNESCO.",
        source: "Marcos 1:9-11; UNESCO — Baptism Site",
        source_url: "https://whc.unesco.org/en/list/1446/",
        certainty: "tradição religiosa",
        controversy: "O local exato do batismo é disputado. O sítio de Betânia além do Jordão (Wadi al-Kharrar) é candidato arqueológico reconhecido pela UNESCO (2015).",
        color_key: "christianity"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [35.5733, 32.8932] },
      properties: {
        id: "chr_004",
        religion: "Cristianismo",
        subtradition: "Ministério de Jesus",
        event: "Ministério na Galileia",
        location: "Cafarnaum, Mar da Galileia",
        country: "Israel (atual)",
        period: "c. 27–30 d.C.",
        period_start: 27,
        period_end: 30,
        event_type: "local sagrado",
        description: "Cafarnaum foi o centro do ministério de Jesus na Galileia segundo os Evangelhos. Ruínas de uma sinagoga do século IV e habitações do século I foram encontradas no local.",
        source: "Marcos 1:21; World History Encyclopedia — Capernaum",
        source_url: "https://www.worldhistory.org/Capernaum/",
        certainty: "histórico bem documentado",
        controversy: "A sinagoga visível hoje é do século IV, mas construída sobre fundações do século I compatíveis com a época de Jesus.",
        color_key: "christianity"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [35.2332, 31.7683] },
      properties: {
        id: "chr_005",
        religion: "Cristianismo",
        subtradition: "Paixão e crucificação",
        event: "Crucificação e Sepultamento — Gólgota/Santo Sepulcro",
        location: "Jerusalém (Igreja do Santo Sepulcro)",
        country: "Israel/Palestina (atual)",
        period: "c. 30–33 d.C.",
        period_start: 30,
        period_end: 33,
        event_type: "crucificação",
        description: "Segundo os Evangelhos, Jesus foi crucificado no Gólgota e sepultado nas proximidades. A Igreja do Santo Sepulcro, construída por Constantino no século IV, marca o local venerado pela tradição.",
        source: "João 19:17-42; Encyclopaedia Britannica — Church of the Holy Sepulchre",
        source_url: "https://www.britannica.com/topic/Church-of-the-Holy-Sepulchre",
        certainty: "tradição religiosa",
        controversy: "A localização é aceita por muitos arqueólogos como plausível para o século I, pois estava fora dos muros de Jerusalém naquele período. Há debate sobre se o local atual corresponde exatamente ao Gólgota bíblico.",
        color_key: "christianity"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [35.2332, 31.7780] },
      properties: {
        id: "chr_006",
        religion: "Cristianismo",
        subtradition: "Paixão",
        event: "Monte das Oliveiras — Oração e prisão de Jesus",
        location: "Monte das Oliveiras, Jerusalém",
        country: "Israel/Palestina (atual)",
        period: "c. 30–33 d.C.",
        period_start: 30,
        period_end: 33,
        event_type: "local sagrado",
        description: "O Monte das Oliveiras é mencionado nos Evangelhos como local onde Jesus orou antes da prisão (Getsêmani). Também associado à Ascensão segundo os Atos dos Apóstolos.",
        source: "Mateus 26:36-56; Atos 1:12",
        source_url: "https://www.britannica.com/place/Mount-of-Olives",
        certainty: "tradição religiosa",
        controversy: "Local simbólico e de peregrinação desde a Antiguidade cristã.",
        color_key: "christianity"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [36.2021, 37.1343] },
      properties: {
        id: "chr_007",
        religion: "Cristianismo",
        subtradition: "Expansão inicial",
        event: "Antioquia — Primeiro uso do termo 'cristãos'",
        location: "Antioquia (atual Antakya, Turquia)",
        country: "Turquia (atual)",
        period: "c. 40–50 d.C.",
        period_start: 40,
        period_end: 50,
        event_type: "expansão",
        description: "Antioquia foi um dos primeiros grandes centros do Cristianismo. Segundo Atos 11:26, foi lá que os seguidores de Jesus foram pela primeira vez chamados de 'cristãos'. Centro das missões de Paulo.",
        source: "Atos 11:19-26; World History Encyclopedia — Antioch",
        source_url: "https://www.worldhistory.org/Antioch/",
        certainty: "histórico bem documentado",
        controversy: "Fonte histórica bem atestada tanto por Atos quanto por escritores romanos.",
        color_key: "christianity"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.2357, 30.0444] },
      properties: {
        id: "chr_008",
        religion: "Cristianismo",
        subtradition: "Expansão inicial",
        event: "Alexandria — Centro teológico cristão primitivo",
        location: "Alexandria",
        country: "Egito",
        period: "c. 50–400 d.C.",
        period_start: 50,
        period_end: 400,
        event_type: "expansão",
        description: "Alexandria tornou-se um dos principais centros intelectuais do Cristianismo, com a Escola Catequética de Alexandria. Clemente e Orígenes foram figuras centrais.",
        source: "Encyclopaedia Britannica — Catechetical School of Alexandria",
        source_url: "https://www.britannica.com/topic/Catechetical-School-of-Alexandria",
        certainty: "histórico bem documentado",
        controversy: "Papel histórico bem atestado.",
        color_key: "christianity"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [12.4964, 41.9028] },
      properties: {
        id: "chr_009",
        religion: "Cristianismo",
        subtradition: "Expansão para Roma",
        event: "Roma — Centro da Igreja Ocidental",
        location: "Roma",
        country: "Itália",
        period: "c. 50–400 d.C.",
        period_start: 50,
        period_end: 400,
        event_type: "expansão",
        description: "Roma tornou-se o principal centro do Cristianismo ocidental. Segundo a tradição, Pedro e Paulo foram martirizados em Roma. O Édito de Milão (313 d.C.) legalizou o Cristianismo no Império Romano.",
        source: "Encyclopaedia Britannica — History of Christianity in Rome",
        source_url: "https://www.britannica.com/place/Rome/The-early-church",
        certainty: "histórico bem documentado",
        controversy: "O martírio de Pedro em Roma é tradição patrística; provas arqueológicas debatidas mas a estrutura da basílica de São Pedro é compatível com veneração antiga.",
        color_key: "christianity"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [28.9784, 41.0082] },
      properties: {
        id: "chr_010",
        religion: "Cristianismo",
        subtradition: "Expansão — Oriente",
        event: "Constantinopla — Capital do Império Cristão",
        location: "Constantinopla (atual Istambul)",
        country: "Turquia (atual)",
        period: "330–1453 d.C.",
        period_start: 330,
        period_end: 1453,
        event_type: "expansão",
        description: "Fundada por Constantino I em 330 d.C., tornou-se capital do Império Romano do Oriente e sede do Patriarcado Ecumênico. Centro do Cristianismo Ortodoxo até a conquista otomana em 1453.",
        source: "Encyclopaedia Britannica — Constantinople",
        source_url: "https://www.britannica.com/place/Constantinople",
        certainty: "histórico bem documentado",
        controversy: "Papel histórico amplamente documentado.",
        color_key: "christianity"
      }
    },

    // =========================================================
    // JUDAÍSMO / BÍBLIA HEBRAICA
    // =========================================================
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [46.1000, 30.9600] },
      properties: {
        id: "jud_001",
        religion: "Judaísmo",
        subtradition: "Patriarcas — Abraão",
        event: "Ur dos Caldeus — Origem de Abraão segundo a tradição",
        location: "Ur dos Caldeus (Tell el-Muqayyar, atual Iraque)",
        country: "Iraque (atual)",
        period: "c. 2000–1800 a.C. (tradição); datação histórica incerta",
        period_start: -2000,
        period_end: -1800,
        event_type: "território ancestral",
        description: "Gênesis 11:31 identifica Ur dos Caldeus como origem de Abraão. O sítio arqueológico de Tell el-Muqayyar corresponde à antiga Ur suméria, uma das cidades mais importantes da Mesopotâmia.",
        source: "Gênesis 11:31; Jewish Virtual Library — Abraham",
        source_url: "https://www.jewishvirtuallibrary.org/abraham",
        certainty: "tradição religiosa",
        controversy: "Historiadores debatem a historicidade de Abraão como figura individual. A identificação de 'Ur dos Caldeus' com Tell el-Muqayyar é aceita por muitos arqueólogos, mas alguns propõem localização na Síria ou sul da Turquia.",
        color_key: "judaism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [38.9500, 36.8600] },
      properties: {
        id: "jud_002",
        religion: "Judaísmo",
        subtradition: "Patriarcas — Abraão",
        event: "Harã — Parada na jornada de Abraão",
        location: "Harã (atual Turquia, próximo a Şanlıurfa)",
        country: "Turquia (atual)",
        period: "c. 2000–1800 a.C. (tradição)",
        period_start: -2000,
        period_end: -1800,
        event_type: "migração",
        description: "Gênesis 11:31-12:5 relata que Terá e Abraão pararam em Harã a caminho de Canaã. Harã era um importante centro comercial e religioso (culto ao deus lunar Sin) no período do Bronze.",
        source: "Gênesis 11:31-12:5; Cambridge Ancient History",
        source_url: "https://www.britannica.com/place/Haran",
        certainty: "hipótese acadêmica",
        controversy: "A narrativa patriarcal tem paralelos com padrões de migração do Bronze Médio, mas a historicidade individual é debatida. Harã existiu historicamente.",
        color_key: "judaism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [35.0000, 31.5000] },
      properties: {
        id: "jud_003",
        religion: "Judaísmo",
        subtradition: "Patriarcas",
        event: "Canaã — Terra Prometida aos patriarcas",
        location: "Canaã (região aproximada)",
        country: "Israel/Palestina/Líbano/Síria (atual)",
        period: "c. 2000–1200 a.C.",
        period_start: -2000,
        period_end: -1200,
        event_type: "território ancestral",
        description: "Canaã é a região prometida por YHWH a Abraão, Isaac e Jacó segundo a tradição bíblica. Arqueologicamente, Canaã era uma região culturalmente diversa no Bronze Médio e Tardio.",
        source: "Gênesis 12:6-7; World History Encyclopedia — Canaan",
        source_url: "https://www.worldhistory.org/canaan/",
        certainty: "tradição religiosa",
        controversy: "A Arqueologia de Canaã é bem documentada, mas a narrativa de conquista israelita descrita em Josué é amplamente contestada. Muitos historiadores propõem que os israelitas emergiram gradualmente da população cananeia.",
        color_key: "judaism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [35.0955, 31.5262] },
      properties: {
        id: "jud_004",
        religion: "Judaísmo",
        subtradition: "Patriarcas",
        event: "Hebrom — Sepultura dos Patriarcas",
        location: "Hebrom (Al-Khalil)",
        country: "Palestina/Israel (atual)",
        period: "c. 2000–1200 a.C. (tradição)",
        period_start: -2000,
        period_end: -1200,
        event_type: "local sagrado",
        description: "Segundo Gênesis, Abraão, Sara, Isaac, Rebeca, Jacó e Leia foram sepultados na Caverna de Macpelá em Hebrom. O sítio (Santuário de Abraão ou Cave of Machpelah) é venerado por judeus e muçulmanos.",
        source: "Gênesis 23; Jewish Virtual Library — Hebron",
        source_url: "https://www.jewishvirtuallibrary.org/hebron",
        certainty: "tradição religiosa",
        controversy: "Local disputado atualmente. A estrutura herodiana existente data do século I a.C. Não há confirmação arqueológica independente das sepulturas dos Patriarcas.",
        color_key: "judaism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [35.2332, 31.7780] },
      properties: {
        id: "jud_005",
        religion: "Judaísmo",
        subtradition: "Primeiro e Segundo Templo",
        event: "Monte Moriá / Templo de Jerusalém",
        location: "Jerusalém — Monte do Templo",
        country: "Israel/Palestina (atual)",
        period: "c. 960 a.C.–70 d.C.",
        period_start: -960,
        period_end: 70,
        event_type: "templo",
        description: "Monte Moriá é associado ao sacrifício de Abraão (Gênesis 22) e ao local onde Salomão construiu o Primeiro Templo (c. 960 a.C.). O Segundo Templo foi reconstruído após o exílio e destruído pelos romanos em 70 d.C.",
        source: "2 Crônicas 3:1; Jewish Virtual Library — Temple Mount",
        source_url: "https://www.jewishvirtuallibrary.org/the-temple-mount",
        certainty: "histórico bem documentado",
        controversy: "A existência do Primeiro Templo é debatida arqueologicamente — escavações são limitadas por restrições religiosas. A destruição do Segundo Templo em 70 d.C. é atestada por fontes romanas (Josefo).",
        color_key: "judaism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [31.2357, 30.0444] },
      properties: {
        id: "jud_006",
        religion: "Judaísmo",
        subtradition: "Êxodo",
        event: "Egito — Escravidão e Êxodo",
        location: "Egito (Delta do Nilo, região de Gósen / Pi-Ramsés)",
        country: "Egito",
        period: "c. 1446–1250 a.C. (tradição); datação acadêmica debatida",
        period_start: -1446,
        period_end: -1250,
        event_type: "exílio",
        description: "O Livro do Êxodo narra a escravidão dos israelitas no Egito e a libertação liderada por Moisés. A região de Gósen, no Delta do Nilo, é identificada com o assentamento dos israelitas.",
        source: "Êxodo 1-15; Encyclopaedia Britannica — Exodus",
        source_url: "https://www.britannica.com/topic/Exodus-Old-Testament",
        certainty: "tradição religiosa",
        controversy: "Não há evidência arqueológica direta de escravidão em massa de israelitas no Egito. Alguns acadêmicos propõem que o núcleo histórico pode refletir experiências de grupos semitas no Egito do Bronze Tardio (ex: os hapiru). A narrativa tem elementos mitológicos significativos.",
        color_key: "judaism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [33.9763, 28.5597] },
      properties: {
        id: "jud_007",
        religion: "Judaísmo",
        subtradition: "Êxodo — Revelação",
        event: "Monte Sinai — Revelação da Torá",
        location: "Monte Sinai (local disputado)",
        country: "Egito/Arábia Saudita (disputado)",
        period: "c. 1446–1250 a.C. (tradição)",
        period_start: -1446,
        period_end: -1250,
        event_type: "revelação",
        description: "O Monte Sinai é o local onde, segundo o Êxodo, Moisés recebeu os Dez Mandamentos. O Monte Musa (Sinai, Egito) é o local tradicional cristão e islâmico, mas há propostas alternativas: Har Karkom (Negev), Monte Béer (Arábia), Jabal al-Lawz (Arábia Saudita).",
        source: "Êxodo 19-20; Jewish Virtual Library — Mount Sinai",
        source_url: "https://www.jewishvirtuallibrary.org/mount-sinai",
        certainty: "local simbólico",
        controversy: "A localização do Monte Sinai bíblico é um dos maiores debates da arqueologia bíblica. Nenhuma das propostas tem consenso acadêmico. O Monte Musa é o local de tradição mais antiga, mas sem confirmação arqueológica definitiva do evento.",
        color_key: "judaism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [36.1000, 32.5000] },
      properties: {
        id: "jud_008",
        religion: "Judaísmo",
        subtradition: "Reinos de Israel e Judá",
        event: "Reino de Israel (Norte) e Reino de Judá (Sul)",
        location: "Samaria e Jerusalém",
        country: "Israel/Palestina (atual)",
        period: "c. 930–586 a.C.",
        period_start: -930,
        period_end: -586,
        event_type: "território ancestral",
        description: "Após a morte de Salomão, o reino se dividiu: Israel (Norte, capital Samaria) e Judá (Sul, capital Jerusalém). Israel foi conquistado pelos assírios em 722 a.C.; Judá pelos babilônios em 586 a.C.",
        source: "1 Reis 12; Encyclopaedia Britannica — Ancient Israel",
        source_url: "https://www.britannica.com/topic/ancient-Israel",
        certainty: "histórico bem documentado",
        controversy: "A divisão do reino é amplamente corroborada por fontes assírias e arqueológicas. O período dos Reis é o mais documentado historicamente da narrativa bíblica.",
        color_key: "judaism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [44.4200, 32.5400] },
      properties: {
        id: "jud_009",
        religion: "Judaísmo",
        subtradition: "Exílio Babilônico",
        event: "Babilônia — Exílio do povo de Judá",
        location: "Babilônia (atual Iraque)",
        country: "Iraque (atual)",
        period: "586–538 a.C.",
        period_start: -586,
        period_end: -538,
        event_type: "exílio",
        description: "Nabucodonosor II destruiu Jerusalém e o Templo em 586 a.C., deportando parte da população judaica para a Babilônia. O exílio terminou com o Édito de Ciro em 538 a.C., que permitiu o retorno.",
        source: "2 Reis 25; Encyclopaedia Britannica — Babylonian Captivity",
        source_url: "https://www.britannica.com/event/Babylonian-Exile",
        certainty: "histórico bem documentado",
        controversy: "Evento bem documentado tanto na Bíblia quanto em fontes babilônicas, incluindo as Crônicas de Nabucodonosor. O número de deportados é debatido.",
        color_key: "judaism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [25.0000, 40.0000] },
      properties: {
        id: "jud_010",
        religion: "Judaísmo",
        subtradition: "Diáspora",
        event: "Diáspora Judaica — Dispersão pelo mundo mediterrâneo e além",
        location: "Europa, Norte da África, Oriente Médio",
        country: "Múltiplos países",
        period: "586 a.C.–presente",
        period_start: -586,
        period_end: 2000,
        event_type: "migração",
        description: "A diáspora judaica se expandiu após o exílio babilônico, acelerada pela destruição do Segundo Templo em 70 d.C. Comunidades se estabeleceram em todo o Mediterrâneo, Pérsia, Europa e mais tarde nas Américas.",
        source: "Jewish Virtual Library — Diaspora",
        source_url: "https://www.jewishvirtuallibrary.org/jewish-diaspora",
        certainty: "histórico bem documentado",
        controversy: "Processo histórico amplamente documentado.",
        color_key: "judaism"
      }
    },

    // =========================================================
    // ISLÃ
    // =========================================================
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [39.8262, 21.4225] },
      properties: {
        id: "isl_001",
        religion: "Islã",
        subtradition: "Nascimento e Revelação",
        event: "Meca — Nascimento de Maomé e Cidade Santa do Islã",
        location: "Meca (Makkah al-Mukarramah)",
        country: "Arábia Saudita",
        period: "c. 570 d.C. em diante",
        period_start: 570,
        period_end: 632,
        event_type: "nascimento",
        description: "Meca é a cidade mais sagrada do Islã. Maomé nasceu aqui c. 570 d.C. A Caaba, estrutura cúbica no centro da Grande Mesquita, é considerada pelos muçulmanos a 'Casa de Deus', construída por Abraão e Ismael segundo a tradição islâmica.",
        source: "Ibn Hisham, Sira Nabawiyya; Encyclopaedia Britannica — Mecca",
        source_url: "https://www.britannica.com/place/Mecca",
        certainty: "histórico bem documentado",
        controversy: "A cidade de Meca existia historicamente. Fontes não-islâmicas sobre o período pré-islâmico são escassas. A data de nascimento de Maomé varia nas fontes islâmicas entre 569 e 571 d.C.",
        color_key: "islam"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [39.8586, 21.4553] },
      properties: {
        id: "isl_002",
        religion: "Islã",
        subtradition: "Primeira Revelação",
        event: "Monte Hira (Jabal al-Nour) — Primeira revelação do Alcorão",
        location: "Jabal al-Nour, próximo a Meca",
        country: "Arábia Saudita",
        period: "c. 610 d.C.",
        period_start: 610,
        period_end: 610,
        event_type: "revelação",
        description: "Segundo a tradição islâmica, o anjo Gabriel revelou a Maomé os primeiros versículos do Alcorão na Caverna Hira (Ghar Hira) no Monte Hira. Este é considerado o início da revelação islâmica (Laylat al-Qadr).",
        source: "Sahih al-Bukhari; Encyclopaedia Britannica — Muhammad",
        source_url: "https://www.britannica.com/biography/Muhammad",
        certainty: "tradição religiosa",
        controversy: "O evento é central na tradição islâmica. Historicamente, a conversão e pregação de Maomé em Meca são atestadas, mas o conteúdo sobrenatural da revelação é matéria de fé, não verificável historicamente.",
        color_key: "islam"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [39.6100, 24.4672] },
      properties: {
        id: "isl_003",
        religion: "Islã",
        subtradition: "Hégira",
        event: "Medina — Hégira (Migração de Maomé de Meca)",
        location: "Medina (Al-Madinah al-Munawwarah)",
        country: "Arábia Saudita",
        period: "622 d.C.",
        period_start: 622,
        period_end: 622,
        event_type: "migração",
        description: "Em 622 d.C., Maomé migrou de Meca para Medina (Hégira), evento que marca o início do calendário islâmico (Anno Hegirae). Em Medina, fundou a primeira comunidade muçulmana (ummah) e a Mesquita do Profeta.",
        source: "Ibn Hisham; Encyclopaedia Britannica — Hijra",
        source_url: "https://www.britannica.com/event/Hijrah",
        certainty: "histórico bem documentado",
        controversy: "A Hégira é um dos eventos mais documentados da história islâmica primitiva e aceito como historicamente ocorrido.",
        color_key: "islam"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [35.2332, 31.7761] },
      properties: {
        id: "isl_004",
        religion: "Islã",
        subtradition: "Al-Aqsa e Ascensão",
        event: "Jerusalém — Al-Aqsa e Noite da Ascensão (Isra e Mi'raj)",
        location: "Jerusalém — Monte do Templo / Esplanada das Mesquitas",
        country: "Israel/Palestina (atual)",
        period: "c. 619–621 d.C. (tradição)",
        period_start: 619,
        period_end: 621,
        event_type: "revelação",
        description: "Segundo a tradição islâmica, Maomé fez uma viagem noturna (Isra) de Meca a Jerusalém, e de lá ascendeu aos céus (Mi'raj). A Mesquita de Al-Aqsa marca este local sagrado, a terceira mais sagrada do Islã.",
        source: "Alcorão 17:1; Encyclopaedia Britannica — Night Journey",
        source_url: "https://www.britannica.com/topic/Isra-and-Miraj",
        certainty: "tradição religiosa",
        controversy: "O Isra e Mi'raj são eventos espirituais centrais do Islã. Há debate entre estudiosos islâmicos sobre se foi corporal ou espiritual. A Mesquita de Al-Aqsa foi construída no século VII, após a conquista árabe.",
        color_key: "islam"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [36.3016, 33.5102] },
      properties: {
        id: "isl_005",
        religion: "Islã",
        subtradition: "Expansão inicial",
        event: "Damasco — Conquista e Capital Omíada",
        location: "Damasco",
        country: "Síria",
        period: "635–750 d.C.",
        period_start: 635,
        period_end: 750,
        event_type: "expansão",
        description: "Damasco foi conquistada pelos exércitos islâmicos em 635 d.C. e tornou-se capital do Califado Omíada. A Grande Mesquita de Damasco (Mesquita dos Omíadas) foi construída sobre uma antiga catedral.",
        source: "Encyclopaedia Britannica — Umayyad Caliphate",
        source_url: "https://www.britannica.com/topic/Umayyad-dynasty-Islamic-history",
        certainty: "histórico bem documentado",
        controversy: "Evento historicamente bem documentado.",
        color_key: "islam"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [44.3661, 33.3406] },
      properties: {
        id: "isl_006",
        religion: "Islã",
        subtradition: "Expansão — Califado Abássida",
        event: "Bagdá — Capital Abássida e centro do Islã",
        location: "Bagdá",
        country: "Iraque",
        period: "762–1258 d.C.",
        period_start: 762,
        period_end: 1258,
        event_type: "expansão",
        description: "Bagdá foi fundada em 762 d.C. como capital do Califado Abássida. Tornou-se o maior centro intelectual do mundo islâmico (Bayt al-Hikma — Casa da Sabedoria), até ser destruída pelos mongóis em 1258.",
        source: "Encyclopaedia Britannica — Baghdad",
        source_url: "https://www.britannica.com/place/Baghdad",
        certainty: "histórico bem documentado",
        controversy: "Papel histórico amplamente documentado.",
        color_key: "islam"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-3.7038, 40.4168] },
      properties: {
        id: "isl_007",
        religion: "Islã",
        subtradition: "Expansão para Ibéria",
        event: "Al-Andalus — Islã na Península Ibérica",
        location: "Córdoba / Al-Andalus",
        country: "Espanha",
        period: "711–1492 d.C.",
        period_start: 711,
        period_end: 1492,
        event_type: "expansão",
        description: "O Islã chegou à Península Ibérica em 711 d.C. com a conquista omíada. Al-Andalus foi um dos maiores centros culturais medievais. A Grande Mesquita de Córdoba (Mezquita-Catedral) é um dos monumentos mais importantes do Islã ibérico.",
        source: "Encyclopaedia Britannica — Al-Andalus",
        source_url: "https://www.britannica.com/place/al-Andalus",
        certainty: "histórico bem documentado",
        controversy: "Período historicamente bem documentado.",
        color_key: "islam"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [51.3890, 35.6892] },
      properties: {
        id: "isl_008",
        religion: "Islã",
        subtradition: "Expansão — Pérsia e Ásia Central",
        event: "Pérsia — Conquista islâmica e conversão",
        location: "Pérsia (atual Irã)",
        country: "Irã",
        period: "633–651 d.C.",
        period_start: 633,
        period_end: 700,
        event_type: "expansão",
        description: "A conquista islâmica da Pérsia (633-651 d.C.) pôs fim ao Império Sassânida e resultou na gradual islamização da região, que viria a se tornar um dos centros mais importantes da civilização islâmica.",
        source: "Encyclopaedia Britannica — Islamic conquest of Persia",
        source_url: "https://www.britannica.com/event/Arab-conquest-of-Iran",
        certainty: "histórico bem documentado",
        controversy: "Evento historicamente bem documentado.",
        color_key: "islam"
      }
    },

    // =========================================================
    // HINDUÍSMO
    // =========================================================
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [67.5000, 27.5000] },
      properties: {
        id: "hin_001",
        religion: "Hinduísmo",
        subtradition: "Civilização do Vale do Indo",
        event: "Vale do Indo — Origens das tradições religiosas do subcontinente",
        location: "Vale do Indo (Mohenjo-daro, Harappa)",
        country: "Paquistão/Índia (atual)",
        period: "c. 3300–1300 a.C.",
        period_start: -3300,
        period_end: -1300,
        event_type: "território ancestral",
        description: "A Civilização do Vale do Indo (Harappa) desenvolveu práticas que alguns estudiosos relacionam com origens do Hinduísmo, incluindo figuras associadas à proto-Shiva e banhos rituais. A relação exata com o Hinduísmo posterior é debatida.",
        source: "Encyclopaedia Britannica — Indus Valley Civilization",
        source_url: "https://www.britannica.com/topic/Indus-civilization",
        certainty: "hipótese acadêmica",
        controversy: "A relação entre a Civilização do Indo e o Hinduísmo é debatida. Alguns elementos iconográficos (proto-Shiva, símbolos) sugerem continuidade, mas o colapso da civilização e o subsequent intervalo tornam conexões diretas especulativas.",
        color_key: "hinduism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.0000, 25.3176] },
      properties: {
        id: "hin_002",
        religion: "Hinduísmo",
        subtradition: "Cidade Sagrada",
        event: "Varanasi (Kashi/Benares) — Cidade Sagrada Mais Antiga",
        location: "Varanasi",
        country: "Índia",
        period: "c. 1200 a.C.–presente",
        period_start: -1200,
        period_end: 2000,
        event_type: "cidade sagrada",
        description: "Varanasi (Kashi) é considerada a cidade sagrada mais antiga habitada continuamente. Às margens do Ganges, é o principal centro de peregrinação hindu, sagrado para Shiva. Morrer em Varanasi é considerado alcançar moksha (libertação).",
        source: "Encyclopaedia Britannica — Varanasi",
        source_url: "https://www.britannica.com/place/Varanasi",
        certainty: "histórico bem documentado",
        controversy: "Varanasi é uma das cidades mais antigas do mundo com ocupação contínua documentada. Sua centralidade religiosa no Hinduísmo é atestada em inúmeras fontes.",
        color_key: "hinduism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.6733, 27.4924] },
      properties: {
        id: "hin_003",
        religion: "Hinduísmo",
        subtradition: "Nascimento de Krishna",
        event: "Mathura — Nascimento de Krishna",
        location: "Mathura",
        country: "Índia",
        period: "Tradição: era anterior ao tempo histórico; culto documentado c. 400 a.C.",
        period_start: -400,
        period_end: 2000,
        event_type: "nascimento",
        description: "Mathura é venerada como local de nascimento de Krishna segundo o Bhagavata Purana. O culto a Krishna em Mathura é documentado desde o período pré-maurya. A Kesava Deo Temple (destruída e reconstruída várias vezes) marca o local tradicional.",
        source: "Bhagavata Purana; Encyclopaedia Britannica — Mathura",
        source_url: "https://www.britannica.com/place/Mathura-India",
        certainty: "tradição religiosa",
        controversy: "Krishna como figura histórica é debatido. Mathura é um centro de culto historicamente documentado. A historicidade da narrativa é matéria de fé para hindus.",
        color_key: "hinduism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [82.1980, 26.7922] },
      properties: {
        id: "hin_004",
        religion: "Hinduísmo",
        subtradition: "Nascimento de Rama",
        event: "Ayodhya — Nascimento de Rama",
        location: "Ayodhya",
        country: "Índia",
        period: "Tradição: Treta Yuga; culto documentado na era medieval",
        period_start: -500,
        period_end: 2000,
        event_type: "nascimento",
        description: "Ayodhya é venerada como local de nascimento de Rama, sétimo avatar de Vishnu, segundo o Ramayana. Local de enorme importância simbólica e política. Em 2019, a Suprema Corte Indiana concedeu o local para construção do Templo Ram.",
        source: "Valmiki Ramayana; Encyclopaedia Britannica — Ayodhya",
        source_url: "https://www.britannica.com/place/Ayodhya",
        certainty: "tradição religiosa",
        controversy: "A identificação de Ayodhya como local de nascimento de Rama é central na fé hindu mas carece de confirmação arqueológica independente. O local foi foco de intenso conflito comunal (Babri Masjid, 1992). A historicidade de Rama é debatida.",
        color_key: "hinduism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [76.8320, 29.9678] },
      properties: {
        id: "hin_005",
        religion: "Hinduísmo",
        subtradition: "Mahabharata / Bhagavad Gita",
        event: "Kurukshetra — Campo de batalha do Mahabharata",
        location: "Kurukshetra",
        country: "Índia",
        period: "Tradição: c. 3100 a.C.; pesquisa acadêmica: c. 900–500 a.C.",
        period_start: -900,
        period_end: -500,
        event_type: "local sagrado",
        description: "Kurukshetra é o campo de batalha onde ocorreu a guerra do Mahabharata segundo a tradição hindu. É onde Krishna revelou o Bhagavad Gita a Arjuna. Local sagrado e de peregrinação.",
        source: "Mahabharata; Encyclopaedia Britannica — Kurukshetra",
        source_url: "https://www.britannica.com/place/Kurukshetra",
        certainty: "hipótese acadêmica",
        controversy: "O Mahabharata pode conter memórias de conflitos históricos no nordeste da Índia, mas a narrativa mítica supera amplamente o substrato histórico verificável. A datação da guerra de Kurukshetra varia entre 3100 a.C. (tradição) e o século IX-V a.C. (acadêmico).",
        color_key: "hinduism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.8670, -1.6500] },
      properties: {
        id: "hin_006",
        religion: "Hinduísmo",
        subtradition: "Expansão para o Sudeste Asiático",
        event: "Expansão hinduísta — Sudeste Asiático (Angkor, Bali, Java)",
        location: "Camboja, Indonésia, Bali, Tailândia",
        country: "Múltiplos países — Sudeste Asiático",
        period: "c. 100–1500 d.C.",
        period_start: 100,
        period_end: 1500,
        event_type: "expansão",
        description: "O Hinduísmo se expandiu para o Sudeste Asiático através de rotas comerciais marítimas. Angkor Wat (Camboja, século XII) é o maior templo hinduísta do mundo. Bali (Indonésia) mantém tradição hinduísta viva. O Império Majapahit (Java) foi um dos maiores reinos hinduísta-budista da região.",
        source: "Encyclopaedia Britannica — Angkor Wat; World History Encyclopedia — Hindu Southeast Asia",
        source_url: "https://www.worldhistory.org/Angkor_Wat/",
        certainty: "histórico bem documentado",
        controversy: "O processo de 'hinduização' do Sudeste Asiático — se foi imposição, adoção voluntária ou sincretismo — é debatido. A terminologia 'Indianização' é criticada por subestimar agência local.",
        color_key: "hinduism"
      }
    },

    // =========================================================
    // BUDISMO
    // =========================================================
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.2763, 27.4833] },
      properties: {
        id: "bud_001",
        religion: "Budismo",
        subtradition: "Nascimento de Sidarta Gautama",
        event: "Lumbini — Nascimento de Sidarta Gautama (Buda)",
        location: "Lumbini",
        country: "Nepal",
        period: "c. 563 a.C. ou 480 a.C. (debatido)",
        period_start: -563,
        period_end: -563,
        event_type: "nascimento",
        description: "Lumbini é o local de nascimento do Buda histórico, Sidarta Gautama, atestado por um pilar do imperador Ashoka (c. 250 a.C.). É Patrimônio da Humanidade da UNESCO. A data exata de nascimento é debatida entre 563 e 480 a.C.",
        source: "UNESCO — Lumbini; Encyclopaedia Britannica — Siddhartha Gautama",
        source_url: "https://whc.unesco.org/en/list/666/",
        certainty: "histórico bem documentado",
        controversy: "A inscrição do pilar de Ashoka em Lumbini confirma o local como nascimento do Buda, mas a data exata é debatida entre tradições Theravada (563 a.C.) e revisão acadêmica (c. 480 a.C.).",
        color_key: "buddhism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [84.9912, 24.6961] },
      properties: {
        id: "bud_002",
        religion: "Budismo",
        subtradition: "Iluminação",
        event: "Bodh Gaya — Iluminação do Buda",
        location: "Bodh Gaya",
        country: "Índia",
        period: "c. 528 a.C. ou 445 a.C. (debatido)",
        period_start: -528,
        period_end: -528,
        event_type: "revelação",
        description: "Bodh Gaya é onde Sidarta Gautama alcançou a iluminação (bodhi) sob a Árvore Bodhi. O Templo Mahabodhi, Patrimônio da Humanidade, marca este local. É o local mais sagrado do Budismo.",
        source: "UNESCO — Mahabodhi Temple; Encyclopaedia Britannica — Bodh Gaya",
        source_url: "https://whc.unesco.org/en/list/1056/",
        certainty: "histórico bem documentado",
        controversy: "O local é atestado por fontes budistas antigas e pela existência do Templo Mahabodhi, cuja estrutura atual data do século V d.C., mas sobre fundações mauryas.",
        color_key: "buddhism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.0179, 25.3876] },
      properties: {
        id: "bud_003",
        religion: "Budismo",
        subtradition: "Primeiro Sermão",
        event: "Sarnath — Primeiro Sermão do Buda (Dhammacakkappavattana Sutta)",
        location: "Sarnath (Parque dos Veados)",
        country: "Índia",
        period: "c. 528 a.C. ou 445 a.C.",
        period_start: -528,
        period_end: -528,
        event_type: "revelação",
        description: "Em Sarnath, o Buda pregou seu primeiro sermão, 'A Roda do Dharma', para cinco companheiros, iniciando o movimento budista. O sítio arqueológico inclui o Estupa de Dhamek (c. 500 d.C.) e ruínas do período maurya.",
        source: "Encyclopaedia Britannica — Sarnath",
        source_url: "https://www.britannica.com/place/Sarnath",
        certainty: "histórico bem documentado",
        controversy: "Local confirmado por tradição budista e por achados arqueológicos significativos, incluindo inscrições do período de Ashoka.",
        color_key: "buddhism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [83.9006, 26.7420] },
      properties: {
        id: "bud_004",
        religion: "Budismo",
        subtradition: "Parinirvana",
        event: "Kushinagar — Morte e Parinirvana do Buda",
        location: "Kushinagar",
        country: "Índia",
        period: "c. 483 a.C. ou 400 a.C.",
        period_start: -483,
        period_end: -483,
        event_type: "local sagrado",
        description: "Kushinagar é onde o Buda faleceu (Parinirvana). O Templo Mahaparinirvana e a estátua do Buda reclinado marcam o local. Um dos quatro locais de peregrinação budista mais importantes.",
        source: "Encyclopaedia Britannica — Kushinagar",
        source_url: "https://www.britannica.com/place/Kushinagar",
        certainty: "histórico bem documentado",
        controversy: "Local atestado por escritos budistas e pelo sítio arqueológico, incluindo estupa identificada pelo imperador Ashoka.",
        color_key: "buddhism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [80.6350, 7.8731] },
      properties: {
        id: "bud_005",
        religion: "Budismo",
        subtradition: "Expansão — Sri Lanka",
        event: "Sri Lanka — Expansão do Budismo Theravada",
        location: "Anuradhapura, Sri Lanka",
        country: "Sri Lanka",
        period: "c. 250 a.C.–presente",
        period_start: -250,
        period_end: 2000,
        event_type: "expansão",
        description: "O Budismo chegou ao Sri Lanka durante o reinado de Ashoka (c. 250 a.C.), trazido por Mahinda (filho de Ashoka). Sri Lanka tornou-se um centro do Budismo Theravada e preservou o cânone Pali.",
        source: "Encyclopaedia Britannica — Buddhism in Sri Lanka",
        source_url: "https://www.britannica.com/topic/Theravada",
        certainty: "histórico bem documentado",
        controversy: "Evento bem documentado nas crônicas budistas do Sri Lanka (Mahavamsa) e corroborado por fontes indias.",
        color_key: "buddhism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [90.4336, 29.6500] },
      properties: {
        id: "bud_006",
        religion: "Budismo",
        subtradition: "Expansão — Tibete",
        event: "Tibete — Budismo Vajrayana",
        location: "Lhasa, Tibete",
        country: "China (Tibete)",
        period: "c. 620–900 d.C.",
        period_start: 620,
        period_end: 900,
        event_type: "expansão",
        description: "O Budismo chegou ao Tibete no século VII d.C. O rei Songtsen Gampo é tradicionalmente creditado com sua introdução. O Palácio de Potala em Lhasa tornou-se centro do Budismo tibetano (Vajrayana).",
        source: "Encyclopaedia Britannica — Tibetan Buddhism",
        source_url: "https://www.britannica.com/topic/Tibetan-Buddhism",
        certainty: "histórico bem documentado",
        controversy: "A conversão do Tibete foi um processo gradual. A data e o papel exato de Songtsen Gampo são debatidos em fontes acadêmicas.",
        color_key: "buddhism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [116.3912, 39.9042] },
      properties: {
        id: "bud_007",
        religion: "Budismo",
        subtradition: "Expansão — China",
        event: "China — Budismo Chan (Zen) e Mahayana",
        location: "Luoyang / Chang'an (Xi'an), China",
        country: "China",
        period: "c. 67 d.C.–900 d.C.",
        period_start: 67,
        period_end: 900,
        event_type: "expansão",
        description: "O Budismo chegou à China pela Rota da Seda c. 67 d.C. Tornou-se uma das principais religiões chinesas. O Budismo Chan (antecessor do Zen japonês) desenvolveu-se na China durante a Dinastia Tang.",
        source: "Encyclopaedia Britannica — Buddhism in China",
        source_url: "https://www.britannica.com/topic/Buddhism/Central-Asia-and-China",
        certainty: "histórico bem documentado",
        controversy: "A data tradicional de 67 d.C. (missão Han Ming Ti) é debatida; a chegada gradual via Rota da Seda pode ter sido anterior.",
        color_key: "buddhism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [135.5023, 34.6851] },
      properties: {
        id: "bud_008",
        religion: "Budismo",
        subtradition: "Expansão — Japão",
        event: "Japão — Chegada e florescimento do Budismo",
        location: "Nara / Osaka, Japão",
        country: "Japão",
        period: "552–900 d.C.",
        period_start: 552,
        period_end: 900,
        event_type: "expansão",
        description: "O Budismo chegou ao Japão via Coreia em 552 d.C. (ou 538 d.C. segundo outra fonte). O príncipe Shotoku promoveu sua difusão. Escolas como Zen (Chan), Pure Land e Tendai tornaram-se centrais na cultura japonesa.",
        source: "Encyclopaedia Britannica — Buddhism in Japan",
        source_url: "https://www.britannica.com/topic/Buddhism/Japan",
        certainty: "histórico bem documentado",
        controversy: "A data exata de chegada (552 ou 538 d.C.) é debatida entre fontes japonesas.",
        color_key: "buddhism"
      }
    },

    // =========================================================
    // RELIGIÕES DE MATRIZ AFRICANA
    // =========================================================
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [4.5582, 7.1025] },
      properties: {
        id: "afr_001",
        religion: "Tradições de Matriz Africana",
        subtradition: "Yorubá / Ifá — Ile-Ife",
        event: "Ile-Ife — Origem do mundo segundo a tradição Yorubá",
        location: "Ile-Ife",
        country: "Nigéria",
        period: "Tradição oral: tempo mítico; presença histórica: c. 800–1400 d.C.",
        period_start: 800,
        period_end: 2000,
        event_type: "cidade sagrada",
        description: "Ile-Ife é considerada a origem do mundo e da humanidade na cosmologia Yorubá. Segundo o mito de criação, Oduduwa desceu do céu em uma corrente e criou a terra em Ile-Ife. Centro espiritual e político do povo Yorubá.",
        source: "World History Encyclopedia — Ile-Ife; Encyclopaedia Britannica — Yoruba",
        source_url: "https://www.worldhistory.org/Ile-Ife/",
        certainty: "tradição religiosa",
        controversy: "A tradição oral Yorubá é a principal fonte para a cosmologia de Ile-Ife. Arqueologicamente, Ile-Ife é um sítio importante com evidências de florescimento cultural entre 800 e 1400 d.C., mas a cosmologia de criação não é verificável historicamente.",
        color_key: "african"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [3.8960, 7.8405] },
      properties: {
        id: "afr_002",
        religion: "Tradições de Matriz Africana",
        subtradition: "Yorubá — Oyo",
        event: "Oyo — Império Yorubá e culto aos Orixás",
        location: "Oyo Antigo (Old Oyo / Katunga)",
        country: "Nigéria",
        period: "c. 1400–1836 d.C.",
        period_start: 1400,
        period_end: 1836,
        event_type: "território ancestral",
        description: "O Império de Oyo foi o mais poderoso estado Yorubá, central na história da região e no desenvolvimento do sistema de culto aos Orixás. A escravidão transatlântica levou praticantes Yorubá às Américas, onde o culto aos Orixás evoluiu para o Candomblé (Brasil), Santería (Cuba) e Lucumí (Caribe).",
        source: "Encyclopaedia Britannica — Oyo Empire; World History Encyclopedia",
        source_url: "https://www.worldhistory.org/Oyo_Empire/",
        certainty: "histórico bem documentado",
        controversy: "O papel do Império Oyo na diáspora religiosa africana é bem documentado. A continuidade específica de práticas rituais na diáspora é área ativa de pesquisa antropológica.",
        color_key: "african"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [2.3158, 6.3654] },
      properties: {
        id: "afr_003",
        religion: "Tradições de Matriz Africana",
        subtradition: "Fon / Ewe / Vodun",
        event: "Abomey — Daomé e as tradições Vodun",
        location: "Abomey (Daomé, atual Benim)",
        country: "Benim",
        period: "c. 1600–1900 d.C.",
        period_start: 1600,
        period_end: 1900,
        event_type: "território ancestral",
        description: "O Reino do Daomé (atual Benim) foi um dos maiores centros das tradições Vodun dos povos Fon e Ewe. O Vodun (Vodou/Voodoo) das Américas tem raízes profundas nessas tradições, levadas pela diáspora atlântica — especialmente para o Haiti e o Brasil (Mina, Maranhão).",
        source: "Encyclopaedia Britannica — Vodun; World History Encyclopedia — Dahomey",
        source_url: "https://www.britannica.com/topic/vodou",
        certainty: "histórico bem documentado",
        controversy: "As relações entre o Vodun do Daomé e o Vodou haitiano, Tambor de Mina brasileiro e outras tradições afro-americanas são objeto de pesquisa etnográfica. As transformações na diáspora são complexas e não constituem simples 'transposição'.",
        color_key: "african"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.3222, -4.3220] },
      properties: {
        id: "afr_004",
        religion: "Tradições de Matriz Africana",
        subtradition: "Bantu / Kongo-Angola",
        event: "Reino do Kongo — Tradições espirituais Bantu",
        location: "São Salvador do Congo (atual Mbanza Kongo), Angola",
        country: "Angola/República do Congo",
        period: "c. 1400–1700 d.C.",
        period_start: 1400,
        period_end: 1700,
        event_type: "território ancestral",
        description: "O Reino do Kongo foi um dos maiores estados da África Central. As tradições espirituais Bantu/Kongo influenciaram profundamente o Candomblé de Angola (Nação Angola), o Batuque gaúcho, o Macumba e a Umbanda no Brasil, e o Palo Monte em Cuba.",
        source: "World History Encyclopedia — Kingdom of Kongo; Encyclopaedia Britannica — Kongo",
        source_url: "https://www.worldhistory.org/Kingdom_of_Kongo/",
        certainty: "histórico bem documentado",
        controversy: "O processo de sincretismo e transformação das tradições Kongo nas Américas é complexo. Pesquisadores debatem o grau de continuidade versus reinterpretação local.",
        color_key: "african"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-38.5016, -12.9714] },
      properties: {
        id: "afr_005",
        religion: "Tradições de Matriz Africana",
        subtradition: "Candomblé — Brasil",
        event: "Salvador (Bahia) — Candomblé e primeiras casas de nação",
        location: "Salvador, Bahia",
        country: "Brasil",
        period: "c. 1820–presente",
        period_start: 1820,
        period_end: 2000,
        event_type: "local sagrado",
        description: "Salvador foi o principal porto de entrada de africanos escravizados no Brasil e o centro do desenvolvimento do Candomblé. A Casa Branca do Engenho Velho (Ilê Axé Iyá Nassô Oká, fundada c. 1830) é considerada a mais antiga casa de Candomblé documentada.",
        source: "Encyclopaedia Britannica — Candomblé; IPHAN — Patrimônio Afro-Brasileiro",
        source_url: "https://www.britannica.com/topic/Candomble",
        certainty: "histórico bem documentado",
        controversy: "A datação exata das primeiras casas de Candomblé é debatida. A história das comunidades religiosas era frequentemente oral e mantida em segredo devido à perseguição colonial e republicana.",
        color_key: "african"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-43.1729, -22.9068] },
      properties: {
        id: "afr_006",
        religion: "Tradições de Matriz Africana",
        subtradition: "Umbanda — Brasil",
        event: "Rio de Janeiro — Nascimento da Umbanda",
        location: "Rio de Janeiro (Niterói)",
        country: "Brasil",
        period: "1908–presente",
        period_start: 1908,
        period_end: 2000,
        event_type: "local sagrado",
        description: "A Umbanda emergiu no Brasil no início do século XX como uma tradição religiosa brasileira, combinando elementos africanos (Candomblé, Banto), indígenas, kardecistas e católicos. A fundação é frequentemente atribuída a Zélio de Moraes em Niterói, 1908.",
        source: "Encyclopaedia Britannica — Umbanda; Brown, D. (1994) Umbanda: Religion and Politics in Urban Brazil (Columbia UP)",
        source_url: "https://www.britannica.com/topic/Umbanda",
        certainty: "histórico bem documentado",
        controversy: "A narrativa de fundação por Zélio de Moraes é a mais difundida mas questionada por alguns pesquisadores. O processo de formação da Umbanda foi gradual e envolveu múltiplos grupos e cidades.",
        color_key: "african"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-82.3666, 23.1136] },
      properties: {
        id: "afr_007",
        religion: "Tradições de Matriz Africana",
        subtradition: "Santería / Lucumí — Cuba",
        event: "Cuba — Santería (Lukumí/Regla de Ocha)",
        location: "Havana / Santiago de Cuba",
        country: "Cuba",
        period: "c. 1800–presente",
        period_start: 1800,
        period_end: 2000,
        event_type: "local sagrado",
        description: "A Santería (Regla de Ocha ou Lucumí) é uma tradição religiosa afro-cubana derivada das tradições Yorubá trazidas por escravizados, com camadas de sincretismo com o Catolicismo. Os Orixás foram associados a santos católicos como estratégia de sobrevivência cultural.",
        source: "Encyclopaedia Britannica — Santería",
        source_url: "https://www.britannica.com/topic/Santeria",
        certainty: "histórico bem documentado",
        controversy: "O grau de sincretismo versus distinção com o Catolicismo é debatido. Praticantes contemporâneos buscam cada vez mais desassociar os Orixás dos santos católicos, afirmando independência teológica.",
        color_key: "african"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-72.3388, 18.5944] },
      properties: {
        id: "afr_008",
        religion: "Tradições de Matriz Africana",
        subtradition: "Vodou — Haiti",
        event: "Haiti — Vodou e Cerimônia de Bois Caïman",
        location: "Haiti (Bois Caïman, norte do Haiti)",
        country: "Haiti",
        period: "c. 1791–presente",
        period_start: 1791,
        period_end: 2000,
        event_type: "local sagrado",
        description: "A cerimônia de Bois Caïman (1791) é considerada um evento fundador da Revolução Haitiana e símbolo do Vodou como força de resistência. O Vodou haitiano sintetiza tradições Fon, Ewe, Yorubá e Kongo com elementos católicos.",
        source: "Encyclopaedia Britannica — Haitian Vodou; World History Encyclopedia — Haitian Revolution",
        source_url: "https://www.britannica.com/topic/voodoo-religion",
        certainty: "histórico bem documentado",
        controversy: "A cerimônia de Bois Caïman é historicamente atestada, mas detalhes rituais variam nas fontes. O Vodou foi sistematicamente demonizado por fontes coloniais e racistas; pesquisa acadêmica contemporânea o trata como sistema religioso complexo.",
        color_key: "african"
      }
    },

    // =========================================================
    // TRADIÇÕES INDÍGENAS AMAZÔNICAS E AMERÍNDIAS
    // =========================================================
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-66.8000, 3.0000] },
      properties: {
        id: "ind_001",
        religion: "Tradições Indígenas",
        subtradition: "Yanomami",
        event: "Alto Rio Negro / Yanomami — Território sagrado e xamanismo",
        location: "Território Yanomami, Amazônia venezolano-brasileira",
        country: "Brasil/Venezuela",
        period: "Pré-colonial–presente",
        period_start: -5000,
        period_end: 2000,
        event_type: "território ancestral",
        description: "Os Yanomami habitam as florestas entre o Brasil e a Venezuela. Sua cosmologia envolve o xamanismo (xapiri — espíritos auxiliares), narrativas de criação e manutenção da floresta como dever espiritual. O xamã (xapiri thëpë) é mediador entre mundos. Fonte: tradição oral e etnografia.",
        source: "Kopenawa, D. & Albert, B. (2013) A Queda do Céu (Companhia das Letras); ISA — Instituto Socioambiental",
        source_url: "https://pib.socioambiental.org/pt/Povo:Yanomami",
        certainty: "tradição oral",
        controversy: "Informação baseada em etnografia e no relato de Davi Kopenawa. Tradições orais não devem ser traduzidas diretamente em categorias ocidentais de 'mito' ou 'religião'.",
        color_key: "indigenous"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-53.2000, -12.0000] },
      properties: {
        id: "ind_002",
        religion: "Tradições Indígenas",
        subtradition: "Alto Xingu",
        event: "Alto Xingu — Kuarup e rituais de ancestralidade",
        location: "Parque Indígena do Xingu, Mato Grosso",
        country: "Brasil",
        period: "Pré-colonial–presente",
        period_start: -3000,
        period_end: 2000,
        event_type: "local sagrado",
        description: "O Alto Xingu abriga dezenas de povos com cosmologias diversas. O Kuarup é um ritual inter-tribal de homenagem aos mortos. A floresta, os rios e os seres sobrenaturais (apapalutapa) são centrais nas cosmologias xinguanas.",
        source: "Franchetto, B. & Heckenberger, M. (eds) (2001) Os Povos do Alto Xingu (UFRJ); ISA",
        source_url: "https://pib.socioambiental.org/pt/Categoria:Alto_Xingu",
        certainty: "tradição oral",
        controversy: "O Alto Xingu abriga múltiplos povos com tradições distintas. Generalizar como uma tradição única é incorreto. Informação baseada em etnografia.",
        color_key: "indigenous"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-67.0000, -1.5000] },
      properties: {
        id: "ind_003",
        religion: "Tradições Indígenas",
        subtradition: "Tukano — Alto Rio Negro",
        event: "Alto Rio Negro — Tradições Tukano e Dabucuri",
        location: "Alto Rio Negro, Amazonas",
        country: "Brasil",
        period: "Pré-colonial–presente",
        period_start: -3000,
        period_end: 2000,
        event_type: "local sagrado",
        description: "Os povos Tukano do Alto Rio Negro possuem cosmologias complexas envolvendo a Cobra Canoa Ancestral, casas cerimoniais (malocas), Dabucuri (rituais de troca e celebração), maloca como eixo do cosmos. O Rio Negro é um eixo cosmológico.",
        source: "Reichel-Dolmatoff, G. (1971) Amazonian Cosmos (Univ. of Chicago); ISA",
        source_url: "https://pib.socioambiental.org/pt/Categoria:Alto_Rio_Negro",
        certainty: "tradição oral",
        controversy: "Baseado em etnografia. As múltiplas nações Tukano (Desana, Tukano próprio, Pira-Tapuya etc.) têm variações cosmológicas significativas.",
        color_key: "indigenous"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-56.0000, -25.0000] },
      properties: {
        id: "ind_004",
        religion: "Tradições Indígenas",
        subtradition: "Guarani — Yvy Marã Eÿ",
        event: "Território Guarani — A Terra Sem Males (Yvy Marã Eÿ)",
        location: "Paraguai, Brasil, Argentina, Bolívia",
        country: "Múltiplos países",
        period: "Pré-colonial–presente",
        period_start: -2000,
        period_end: 2000,
        event_type: "território ancestral",
        description: "Os Guarani possuem uma das mais influentes cosmologias indígenas das Américas. Yvy Marã Eÿ ('Terra Sem Males') é uma terra sagrada sem morte e sem sofrimento, buscada em longas migrações rituais. O Nhanderu (Deus) e a palavra sagrada (Ñe'ẽ) são centrais.",
        source: "Clastres, H. (1975) La Terre sans Mal (Seuil); Nimuendajú, C. (1914) As Lendas da Criação e Destruição do Mundo",
        source_url: "https://pib.socioambiental.org/pt/Povo:Guarani",
        certainty: "tradição oral",
        controversy: "A interpretação da Terra Sem Males como 'utopia religiosa' ocidentalizante é criticada por alguns pesquisadores. Prefere-se compreendê-la em seus próprios termos cosmológicos Guarani.",
        color_key: "indigenous"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-70.0000, -10.0000] },
      properties: {
        id: "ind_005",
        religion: "Tradições Indígenas",
        subtradition: "Tikuna — Amazônia Ocidental",
        event: "Tikuna — Rituais de iniciação e cosmologia amazônica",
        location: "Alto Solimões, Amazonas",
        country: "Brasil/Peru/Colômbia",
        period: "Pré-colonial–presente",
        period_start: -3000,
        period_end: 2000,
        event_type: "território ancestral",
        description: "Os Tikuna são o povo indígena mais numeroso do Brasil. Seu sistema cosmológico envolve seres sobrenaturais (Ngo'o, o criador), rituais de iniciação feminina (Festa da Moça Nova/Pelazón) e relação profunda com a floresta e os rios.",
        source: "Gruber, J.W. (1994) O Sistema Jurídico Tikuna; ISA",
        source_url: "https://pib.socioambiental.org/pt/Povo:Tikuna",
        certainty: "tradição oral",
        controversy: "Informação baseada em etnografia. A resistência Tikuna ao contato missionário e sua luta por território são parte integrante de sua identidade cultural e espiritual.",
        color_key: "indigenous"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-49.5000, -0.5000] },
      properties: {
        id: "ind_006",
        religion: "Tradições Indígenas",
        subtradition: "Marajoara — Arqueologia",
        event: "Ilha de Marajó — Cultura Marajoara e espiritualidade",
        location: "Ilha de Marajó, Pará",
        country: "Brasil",
        period: "c. 400–1300 d.C.",
        period_start: 400,
        period_end: 1300,
        event_type: "território ancestral",
        description: "A Cultura Marajoara foi uma sociedade complexa na Ilha de Marajó com elaborada cerâmica cerimonial e túmulos em grandes aterros. Indicações de rituais funerários e possivelmente cosmológicos, mas a tradição oral não sobreviveu.",
        source: "Schaan, D. (2004) The Marajoara Culture (Univ. of Pittsburgh); MPEG — Museu Paraense Emílio Goeldi",
        source_url: "https://www.britannica.com/topic/Marajo",
        certainty: "interpretação arqueológica",
        controversy: "As interpretações espirituais/religiosas da cultura Marajoara são inferências arqueológicas. Não há descendentes diretos conhecidos que preservem as tradições orais desta cultura específica.",
        color_key: "indigenous"
      }
    },

    // =========================================================
    // TRADIÇÕES DA EUROPA ANTIGA
    // =========================================================
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-1.8262, 51.1789] },
      properties: {
        id: "eur_001",
        religion: "Tradições Europeias Antigas",
        subtradition: "Tradições pré-históricas da Europa Ocidental",
        event: "Stonehenge — Sítio ritual e astronômico pré-histórico",
        location: "Stonehenge, Wiltshire",
        country: "Reino Unido",
        period: "c. 3000–1500 a.C.",
        period_start: -3000,
        period_end: -1500,
        event_type: "templo",
        description: "Stonehenge é um dos monumentos megalíticos mais famosos do mundo, com alinhamentos astronômicos (solstício de verão). Sua função ritual é inferida, mas a cultura que o construiu é anterior às tradições celtas históricas.",
        source: "Encyclopaedia Britannica — Stonehenge; Historic England",
        source_url: "https://www.britannica.com/topic/Stonehenge",
        certainty: "interpretação arqueológica",
        controversy: "A associação de Stonehenge com Druidas celtas é uma construção romântica do século XVIII, sem base histórica. Os construtores de Stonehenge eram populações do Neolítico e da Idade do Bronze, anteriores à chegada dos celtas.",
        color_key: "european"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-8.4103, 53.3301] },
      properties: {
        id: "eur_002",
        religion: "Tradições Europeias Antigas",
        subtradition: "Tradição Celta — Irlanda",
        event: "Irlanda — Centro das tradições celtas e druídicas",
        location: "Tara, Leinster, Irlanda",
        country: "Irlanda",
        period: "c. 600 a.C.–400 d.C.",
        period_start: -600,
        period_end: 400,
        event_type: "local sagrado",
        description: "A Colina de Tara era o centro sagrado da Irlanda celta, sede dos Ard Rígh (Reis Supremos) e local de rituais druídicos. As tradições celtas irlandesas são mais bem preservadas que as continentais, graças à escrita monástica cristã posterior.",
        source: "Encyclopaedia Britannica — Druids; World History Encyclopedia — Celtic Religion",
        source_url: "https://www.worldhistory.org/Celtic_Religion/",
        certainty: "histórico bem documentado",
        controversy: "Muito do que se sabe sobre os Druidas vem de fontes greco-romanas, potencialmente tendenciosas. A tradição oral celta não foi transcrita pelos próprios celtas.",
        color_key: "european"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.5058, 46.0569] },
      properties: {
        id: "eur_003",
        religion: "Tradições Europeias Antigas",
        subtradition: "Tradições Eslavas",
        event: "Europa Central/Oriental — Tradições eslavas pré-cristãs",
        location: "Europa Central e Oriental (área aproximada)",
        country: "Múltiplos países (Eslováquia, Polônia, Ucrânia etc.)",
        period: "c. 500 a.C.–1000 d.C.",
        period_start: -500,
        period_end: 1000,
        event_type: "território ancestral",
        description: "As tradições religiosas eslavas pré-cristãs incluíam cultos a Perun (deus do trovão), Veles (deus do submundo), Rod e Rozanitsy (deuses do destino). Foram sendo substituídas pelo Cristianismo Ortodoxo entre os séculos IX e XII.",
        source: "Encyclopaedia Britannica — Slavic Religion; World History Encyclopedia — Slavic Mythology",
        source_url: "https://www.worldhistory.org/Slavic_Mythology/",
        certainty: "histórico bem documentado",
        controversy: "Fontes sobre a religião eslava pré-cristã são escassas e muitas vezes mediadas por cronistas cristãos. Reconstruções modernas são parcialmente hipotéticas.",
        color_key: "european"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.5722, 58.4108] },
      properties: {
        id: "eur_004",
        religion: "Tradições Europeias Antigas",
        subtradition: "Tradições Nórdicas / Germânicas",
        event: "Escandinávia — Tradições Nórdicas (Asatru, Ragnarök, Yggdrasil)",
        location: "Escandinávia (Suécia, Noruega, Dinamarca)",
        country: "Escandinávia",
        period: "c. 200–1100 d.C.",
        period_start: 200,
        period_end: 1100,
        event_type: "território ancestral",
        description: "As tradições religiosas nórdicas incluíam cultos a Odin, Thor, Freya, o cosmos de Yggdrasil (a árvore do mundo), os Noves Mundos e a escatologia de Ragnarök. Preservadas nas Eddas (séc. XII–XIII) compiladas por Snorri Sturluson após a christianização.",
        source: "Encyclopaedia Britannica — Norse Mythology; Sturluson, S. (c.1220) Prose Edda",
        source_url: "https://www.britannica.com/topic/Norse-mythology",
        certainty: "histórico bem documentado",
        controversy: "As Eddas foram compiladas dois a três séculos após o início da christianização. Há debate sobre quanto da mitologia nórdica foi preservado fielmente versus reinterpretado por autores cristãos.",
        color_key: "european"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [21.8243, 37.9908] },
      properties: {
        id: "eur_005",
        religion: "Tradições Europeias Antigas",
        subtradition: "Grécia Antiga",
        event: "Olimpia — Centro do culto a Zeus e Jogos Olímpicos",
        location: "Olímpia, Peloponeso",
        country: "Grécia",
        period: "c. 776 a.C.–393 d.C.",
        period_start: -776,
        period_end: 393,
        event_type: "templo",
        description: "Olímpia era o principal santuário de Zeus e sede dos Jogos Olímpicos (776 a.C.–393 d.C.), que eram antes de tudo um ritual religioso. O Templo de Zeus abrigava a estátua criada por Fídias, uma das Sete Maravilhas do Mundo Antigo.",
        source: "Encyclopaedia Britannica — Olympia; World History Encyclopedia — Ancient Olympics",
        source_url: "https://www.worldhistory.org/olympia/",
        certainty: "histórico bem documentado",
        controversy: "As tradições religiosas olímpicas são amplamente documentadas por fontes gregas e arqueológicas.",
        color_key: "european"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [22.4997, 37.9219] },
      properties: {
        id: "eur_006",
        religion: "Tradições Europeias Antigas",
        subtradition: "Grécia Antiga — Oráculo",
        event: "Delfos — Oráculo de Apolo",
        location: "Delfos",
        country: "Grécia",
        period: "c. 800 a.C.–390 d.C.",
        period_start: -800,
        period_end: 390,
        event_type: "local sagrado",
        description: "Delfos era o local mais sagrado do mundo grego, considerado o 'umbigo do mundo' (omphalos). O Oráculo de Apolo (Pítia) era consultado por reis, estados e indivíduos de todo o Mediterrâneo para orientação religiosa e política.",
        source: "Encyclopaedia Britannica — Delphi; World History Encyclopedia — Delphi",
        source_url: "https://www.worldhistory.org/delphi/",
        certainty: "histórico bem documentado",
        controversy: "A existência histórica do oráculo e do templo é bem atestada. Pesquisas modernas sugeriram que gases geológicos (etileno) podiam induzir estados alterados na Pítia.",
        color_key: "european"
      }
    },

    // =========================================================
    // OUTRAS TRADIÇÕES RELEVANTES
    // =========================================================
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [74.8723, 31.6340] },
      properties: {
        id: "sik_001",
        religion: "Sikhismo",
        subtradition: "Origem do Sikhismo",
        event: "Amritsar — Templo Dourado e centro do Sikhismo",
        location: "Amritsar, Punjab",
        country: "Índia",
        period: "1577–presente (fundação de Amritsar); Sikhismo fundado c. 1500",
        period_start: 1500,
        period_end: 2000,
        event_type: "templo",
        description: "O Guru Nanak (1469–1539) fundou o Sikhismo no Punjab. O Templo Dourado (Harmandir Sahib) em Amritsar, construído pelo quinto Guru (Arjan Dev), é o lugar mais sagrado do Sikhismo. O Guru Granth Sahib é a escritura sagrada e considerado o Guru eterno.",
        source: "Encyclopaedia Britannica — Sikhism",
        source_url: "https://www.britannica.com/topic/Sikhism",
        certainty: "histórico bem documentado",
        controversy: "A história do Sikhismo é bem documentada. Há debates sobre a relação entre Sikhismo e Hinduísmo/Islã, que o Sikhismo rejeita como influências definidoras, afirmando-se como revelação independente.",
        color_key: "sikhism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [51.4231, 35.7219] },
      properties: {
        id: "zor_001",
        religion: "Zoroastrismo",
        subtradition: "Pérsia Antiga",
        event: "Pérsia — Origem do Zoroastrismo",
        location: "Bactriana / Pérsia (Irã/Afeganistão atuais)",
        country: "Irã/Afeganistão (atual)",
        period: "c. 1500–600 a.C. (Zaratustra); Aquemênida: c. 550–330 a.C.",
        period_start: -1500,
        period_end: -330,
        event_type: "revelação",
        description: "Zaratustra (Zoroastro) fundou o Zoroastrismo, uma das primeiras religiões monoteístas/dualistas. O Avesta é a escritura sagrada. Tornou-se a religião estatal dos impérios Aquemênida, Parta e Sassânida. Influenciou Judaísmo, Cristianismo e Islã.",
        source: "Encyclopaedia Britannica — Zoroastrianism",
        source_url: "https://www.britannica.com/topic/Zoroastrianism",
        certainty: "histórico bem documentado",
        controversy: "A data de Zaratustra é altamente debatida: de 1700 a.C. a 600 a.C. A localização de sua atividade também é incerta.",
        color_key: "zoroastrianism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [104.1954, 35.8617] },
      properties: {
        id: "tao_001",
        religion: "Taoismo e Confucionismo",
        subtradition: "China Antiga",
        event: "China — Origens do Taoismo e Confucionismo",
        location: "China Central (Shandong/Henan)",
        country: "China",
        period: "c. 551–479 a.C. (Confúcio); c. 400 a.C. (Laozi, debatido)",
        period_start: -551,
        period_end: -300,
        event_type: "revelação",
        description: "Confúcio (551–479 a.C.) nasceu em Lu (atual Shandong). Laozi, autor atribuído do Tao Te Ching, é figura semi-lendária. O Taoismo filosófico e religioso e o Confucionismo tornaram-se pilares da civilização chinesa.",
        source: "Encyclopaedia Britannica — Confucius; Encyclopaedia Britannica — Taoism",
        source_url: "https://www.britannica.com/biography/Confucius",
        certainty: "histórico bem documentado",
        controversy: "A historicidade de Laozi é debatida. Confúcio é bem documentado historicamente. A autoria e data do Tao Te Ching são incertas.",
        color_key: "taoism"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [135.8048, 34.6937] },
      properties: {
        id: "shin_001",
        religion: "Xintoísmo",
        subtradition: "Japão",
        event: "Japão — Xintoísmo e Grande Santuário de Ise",
        location: "Ise, Mie, Japão",
        country: "Japão",
        period: "c. 300 a.C.–presente",
        period_start: -300,
        period_end: 2000,
        event_type: "templo",
        description: "O Xintoísmo é a tradição religiosa nativa do Japão, baseada no culto a Kami (espíritos/divindades da natureza). O Grande Santuário de Ise (Ise Jingū) é o mais sagrado, dedicado à deusa solar Amaterasu. Reconstruído a cada 20 anos (Shikinen Sengu) por mais de 1.300 anos.",
        source: "Encyclopaedia Britannica — Shinto",
        source_url: "https://www.britannica.com/topic/Shinto",
        certainty: "histórico bem documentado",
        controversy: "O Xintoísmo foi sistematizado como religião estatal no período Meiji (1868–1912), mesclando elementos variados. O 'Xintoísmo antigo' é parcialmente uma construção retrospectiva.",
        color_key: "shinto"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-88.5678, 17.2510] },
      properties: {
        id: "mso_001",
        religion: "Tradições Mesoamericanas",
        subtradition: "Maya",
        event: "Chichen Itza — Centro cerimonial Maya",
        location: "Chichen Itza, Yucatán",
        country: "México",
        period: "c. 600–1200 d.C.",
        period_start: 600,
        period_end: 1200,
        event_type: "templo",
        description: "Chichen Itza foi um dos maiores centros cerimoniais e políticos Maya. O Templo de Kukulcán (El Castillo) tem alinhamentos astronômicos precisos com os equinócios. O Cenote Sagrado era local de oferendas à divindade da chuva Chaac.",
        source: "Encyclopaedia Britannica — Chichen Itza; UNESCO",
        source_url: "https://www.britannica.com/place/Chichen-Itza",
        certainty: "histórico bem documentado",
        controversy: "Os sacrifícios humanos relatados em Chichen Itza foram exagerados em fontes coloniais espanholas. A interpretação exata dos rituais é baseada em epigrafia Maya e arqueologia.",
        color_key: "mesoamerican"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-77.0428, -13.1631] },
      properties: {
        id: "and_001",
        religion: "Tradições Andinas",
        subtradition: "Inca",
        event: "Cusco — Ombligo do Mundo e Coricancha",
        location: "Cusco",
        country: "Peru",
        period: "c. 1100–1533 d.C.",
        period_start: 1100,
        period_end: 1533,
        event_type: "cidade sagrada",
        description: "Cusco era o 'ombligo do mundo' (Qusqu) para os Incas. O Coricancha era o principal templo do Sol (Inti), coberto de ouro. Os Incas tinham um elaborado sistema de wakas (locais sagrados) distribuídos pelo Tawantinsuyu.",
        source: "Encyclopaedia Britannica — Cuzco; World History Encyclopedia — Inca Religion",
        source_url: "https://www.worldhistory.org/Inca_Religion/",
        certainty: "histórico bem documentado",
        controversy: "As fontes sobre a religião Inca são em grande parte de cronistas espanhóis do século XVI, com possíveis distorções. A arqueologia complementa, mas não substitui completamente essas narrativas.",
        color_key: "andean"
      }
    }
  ]
};

// Rotas de expansão e peregrinação
const SACRED_ROUTES = [
  {
    id: "route_via_dolorosa",
    religion: "Cristianismo",
    name: "Via Dolorosa — Rota tradicional da Paixão",
    color: "#C0392B",
    certainty: "tradição religiosa",
    description: "Rota tradicional percorrida por Jesus carregando a cruz, segundo a tradição cristã. Define 14 estações dentro de Jerusalém.",
    coordinates: [
      [35.2355, 31.7817],
      [35.2345, 31.7805],
      [35.2338, 31.7795],
      [35.2332, 31.7783]
    ]
  },
  {
    id: "route_exodus",
    religion: "Judaísmo",
    name: "Rota do Êxodo — Hipótese tradicional",
    color: "#8E44AD",
    certainty: "hipótese acadêmica",
    description: "Rota tradicional do Êxodo do Egito a Canaã, passando pelo Sinai. Múltiplas rotas alternativas são propostas pelos acadêmicos.",
    coordinates: [
      [31.2357, 30.0444],
      [32.2665, 30.5852],
      [33.9763, 28.5597],
      [35.3000, 30.3000],
      [35.0000, 31.5000]
    ]
  },
  {
    id: "route_hegira",
    religion: "Islã",
    name: "Rota da Hégira — Meca a Medina (622 d.C.)",
    color: "#27AE60",
    certainty: "histórico bem documentado",
    description: "Rota de Maomé e seus seguidores de Meca a Medina em 622 d.C., marcando o início do calendário islâmico.",
    coordinates: [
      [39.8262, 21.4225],
      [39.7700, 22.0000],
      [39.6100, 24.4672]
    ]
  },
  {
    id: "route_silk_road_buddhism",
    religion: "Budismo",
    name: "Budismo pela Rota da Seda — Índia à China",
    color: "#F39C12",
    certainty: "histórico bem documentado",
    description: "Expansão do Budismo da Índia para a China e Ásia Central através da Rota da Seda, entre os séculos I e VII d.C.",
    coordinates: [
      [78.0000, 27.0000],
      [68.0000, 34.0000],
      [63.0000, 39.0000],
      [87.0000, 43.0000],
      [99.0000, 40.0000],
      [116.3912, 39.9042]
    ]
  },
  {
    id: "route_islam_expansion",
    religion: "Islã",
    name: "Expansão inicial do Islã (622–750 d.C.)",
    color: "#2ECC71",
    certainty: "histórico bem documentado",
    description: "Expansão rápida do Islã em um século após a Hégira, cobrindo Península Arábica, Norte da África, Pérsia, Espanha e Ásia Central.",
    coordinates: [
      [39.6100, 24.4672],
      [39.8262, 21.4225],
      [36.3016, 33.5102],
      [44.3661, 33.3406],
      [31.2357, 30.0444],
      [10.0000, 36.0000],
      [-3.7038, 40.4168],
      [51.3890, 35.6892],
      [69.0000, 34.0000]
    ]
  },
  {
    id: "route_atlantic_diaspora",
    religion: "Tradições de Matriz Africana",
    name: "Diáspora Atlântica — Rota do tráfico escravista",
    color: "#E74C3C",
    certainty: "histórico bem documentado",
    description: "Rota forçada do tráfico transatlântico de escravizados, que levou às Américas as tradições religiosas africanas que viriam a se tornar Candomblé, Umbanda, Santería, Vodou e outras.",
    coordinates: [
      [4.5582, 7.1025],
      [2.3158, 6.3654],
      [15.3222, -4.3220],
      [-25.0000, 5.0000],
      [-38.5016, -12.9714],
      [-43.1729, -22.9068],
      [-72.3388, 18.5944],
      [-82.3666, 23.1136]
    ]
  },
  {
    id: "route_christian_expansion",
    religion: "Cristianismo",
    name: "Expansão cristã primitiva (33–400 d.C.)",
    color: "#C0392B",
    certainty: "histórico bem documentado",
    description: "Expansão inicial do Cristianismo de Jerusalém para Antioquia, Alexandria, Roma e Constantinopla.",
    coordinates: [
      [35.2332, 31.7683],
      [36.2021, 37.1343],
      [31.2357, 30.0444],
      [12.4964, 41.9028],
      [28.9784, 41.0082]
    ]
  }
];

// Mapeamento de cores por tradição
const RELIGION_COLORS = {
  christianity: { primary: "#C0392B", light: "#E74C3C", name: "Cristianismo", icon: "✝" },
  judaism: { primary: "#8E44AD", light: "#9B59B6", name: "Judaísmo", icon: "✡" },
  islam: { primary: "#27AE60", light: "#2ECC71", name: "Islã", icon: "☪" },
  hinduism: { primary: "#E67E22", light: "#F39C12", name: "Hinduísmo", icon: "🕉" },
  buddhism: { primary: "#F1C40F", light: "#F9CA24", name: "Budismo", icon: "☸" },
  african: { primary: "#E74C3C", light: "#FF6B6B", name: "Tradições Africanas e Afro-diaspóricas", icon: "◉" },
  indigenous: { primary: "#16A085", light: "#1ABC9C", name: "Tradições Indígenas Américas", icon: "◈" },
  european: { primary: "#2980B9", light: "#3498DB", name: "Tradições Europeias Antigas", icon: "⚡" },
  sikhism: { primary: "#F39C12", light: "#FDCB6E", name: "Sikhismo", icon: "☬" },
  zoroastrianism: { primary: "#D35400", light: "#E17055", name: "Zoroastrismo", icon: "🔥" },
  taoism: { primary: "#2C3E50", light: "#34495E", name: "Taoismo / Confucionismo", icon: "☯" },
  shinto: { primary: "#E84393", light: "#FD79A8", name: "Xintoísmo", icon: "⛩" },
  mesoamerican: { primary: "#6C5CE7", light: "#A29BFE", name: "Tradições Mesoamericanas", icon: "◆" },
  andean: { primary: "#00B894", light: "#55EFC4", name: "Tradições Andinas", icon: "◇" }
};

// Tipos de eventos com ícones
const EVENT_TYPES = {
  "nascimento": { icon: "★", label: "Nascimento" },
  "revelação": { icon: "✦", label: "Revelação / Fundação" },
  "local sagrado": { icon: "◉", label: "Local Sagrado" },
  "cidade sagrada": { icon: "⬡", label: "Cidade Sagrada" },
  "templo": { icon: "⌂", label: "Templo / Santuário" },
  "peregrinação": { icon: "↻", label: "Peregrinação" },
  "expansão": { icon: "→", label: "Expansão" },
  "exílio": { icon: "⇒", label: "Exílio / Dispersão" },
  "migração": { icon: "⤳", label: "Migração" },
  "crucificação": { icon: "✞", label: "Crucificação" },
  "território ancestral": { icon: "◈", label: "Território Ancestral" },
  "tradição oral": { icon: "◎", label: "Tradição Oral" },
  "interpretação arqueológica": { icon: "⚑", label: "Interpretação Arqueológica" }
};

// Nível de certeza
const CERTAINTY_LEVELS = {
  "histórico bem documentado": { badge: "Documentado", color: "#27AE60", bg: "#d4edda" },
  "tradição religiosa": { badge: "Tradição Religiosa", color: "#2980B9", bg: "#d1ecf1" },
  "hipótese acadêmica": { badge: "Hipótese Acadêmica", color: "#E67E22", bg: "#fff3cd" },
  "local simbólico": { badge: "Local Simbólico/Disputado", color: "#8E44AD", bg: "#e8daef" },
  "tradição oral": { badge: "Tradição Oral", color: "#16A085", bg: "#d1f2eb" },
  "interpretação arqueológica": { badge: "Arqueologia", color: "#D35400", bg: "#fce4d2" }
};
