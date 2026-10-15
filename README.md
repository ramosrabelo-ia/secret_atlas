# Sacred Atlas
### História, território e tradições

Um atlas interativo para explorar a geografia das tradições religiosas e espirituais: lugares, acontecimentos e caminhos que atravessam séculos.

**68 lugares · 14 categorias de tradições · Mapa interativo · Linha do tempo**

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
├── data.js          # Lugares, rotas e metadados
└── README.md
```

## Contribuições

Encontrou uma localização incorreta, uma referência insuficiente ou uma tradição pouco representada? Abra uma issue descrevendo o problema e, quando possível, inclua uma fonte verificável.

Contribuições de conteúdo devem distinguir evidência histórica, interpretação acadêmica e tradição religiosa, respeitando as comunidades representadas.
