# Sacred Atlas
### História, território e tradições

Um atlas interativo para explorar a geografia das tradições religiosas e espirituais: lugares, acontecimentos e caminhos que atravessam séculos.

**Versão 2 · 86 registros · 4 camadas temáticas · Pará × Japão**

## Navegação

O mapa mundial é a tela principal. Os novos estudos da V2 ficam na sequência, abaixo do mapa, com fichas que abrem diretamente seus detalhes e sua região.

## Novidades da versão 2

- Estudo do Pará com referências regionais Munduruku, Mẽbengôkre/Kayapó, Tiriyó/Tarëno e Tembé/Tenetehara.
- Novas fichas Yanomami, Baniwa, Tukano, Magüta/Tikuna e Wajãpi.
- Camadas de povos e tradições, missões e colonização, transformações religiosas e religiões no presente.
- Comparação Pará × Japão, distinguindo missão religiosa e domínio colonial.
- Filtros por povo e território; cronologia até 2026; opção de incluir tradições sem data de origem atribuída.
- Fontes identificadas em cada ficha nova, data de consulta e notas de precisão geográfica.

### Limites desta versão

As coordenadas novas são **âncoras editoriais aproximadas de regiões ou cidades**, não coordenadas verificadas de aldeias, missões ou lugares sagrados. Não foram incluídos polígonos de Terras Indígenas ou rotas missionárias inventadas. A fonte cartográfica de limites estaduais não pôde ser incorporada nesta atualização.

As fichas novas são sínteses de fontes públicas, sem validação comunitária. A V1 fora desse recorte ainda não foi auditada integralmente. Datas de origem sem sustentação foram retiradas de registros de tradição oral indígena; o registro Tikuna foi corrigido para uma referência ao Alto Solimões.

O indicador de católicos do Censo 2022 é **nacional**, para pessoas de 10 anos ou mais. O percentual do Pará permanece pendente de validação e não foi estimado.

Consulte [as fontes e a metodologia](SOURCES.md).

## A história também pode ser explorada pelo mapa

Onde uma tradição surgiu? Por quais territórios se expandiu? Como um mesmo lugar reúne narrativas diferentes?

O Sacred Atlas conecta lugares a contextos históricos e religiosos, permitindo explorar essas relações por território, período e tipo de acontecimento.

## O que você pode explorar

- **Mapa interativo:** navegue pelos lugares e abra seus detalhes.
- **Tradições:** selecione as camadas que deseja visualizar.
- **Linha do tempo:** filtre os acontecimentos por período.
- **Rotas:** visualize trajetos esquemáticos de expansão, migração e peregrinação.
- **Busca:** encontre lugares e eventos, com ou sem acentos.
- **Contexto e fontes:** consulte descrições, referências e debates associados aos registros.
- **Interface responsiva:** navegue pelo computador ou celular, com temas claro e escuro.

## História e tradição, com suas diferenças

| Classificação | O que indica |
|---|---|
| Histórico bem documentado | Registro classificado na base como sustentado por evidências históricas. |
| Tradição religiosa | Narrativa preservada por uma tradição de fé. |
| Hipótese acadêmica | Interpretação proposta por pesquisadores. |
| Local simbólico ou disputado | Lugar de significado religioso cuja identificação pode ser incerta ou contestada. |
| Tradição oral | Conhecimento transmitido oralmente. |
| Interpretação arqueológica | Inferência associada a vestígios materiais. |

**A base está em desenvolvimento.** As classificações e referências foram preservadas do projeto original e ainda precisam de revisão independente. Datas, coordenadas e rotas podem ser aproximadas.

O projeto não pretende hierarquizar tradições nem apresentar narrativas religiosas como fatos históricos comprovados por padrão.

## Como executar

```bash
git clone https://github.com/ramosrabelo-ia/secret_atlas.git
cd secret_atlas
```

Abra `index.html` no navegador.

Não é necessário instalar dependências ou configurar uma chave de API. É preciso conexão com a internet para carregar o mapa, as bibliotecas externas e as fontes tipográficas.

## Tecnologias

| Tecnologia | Função |
|---|---|
| HTML, CSS e JavaScript | Interface e interações, sem etapa de compilação. |
| Leaflet | Navegação e camadas do mapa. |
| OpenStreetMap | Mapa de base. |
| Google Fonts | Tipografia da interface. |

A atribuição aos colaboradores do OpenStreetMap permanece visível no mapa. O uso dos serviços externos está sujeito às respectivas condições.

## Estrutura

```text
sacred-atlas/
├── index.html       # Página principal
├── style.css        # Estilos da base original
├── refined.css      # Identidade visual branca e roxa
├── app.js           # Mapa, busca, filtros e navegação
├── data.js          # Base herdada
├── v2-data.js       # Correções e novos registros com fontes
├── v2-ui.js         # Camadas e comparação Pará × Japão
├── SOURCES.md       # Fontes e metodologia
└── README.md
```

## Contribuições

Encontrou uma localização incorreta, uma referência insuficiente ou uma tradição pouco representada? Abra uma issue descrevendo o problema e, quando possível, inclua uma fonte verificável.

Contribuições de conteúdo devem distinguir evidência histórica, interpretação acadêmica e tradição religiosa, respeitando as comunidades representadas.
