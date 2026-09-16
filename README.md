# Tarefa DOM - In Junior

Este repositório contém um projeto front-end desenvolvido como tarefa na IN Junior, com foco na **manipulação do DOM** via JavaScript puro. O projeto implementa uma calculadora de média de notas com interação direta entre o usuário e a interface.

## 📋 Sobre o projeto

O **Tarefa DOM** é uma aplicação web simples que permite ao usuário:

- Inserir notas individualmente (com suporte a vírgula e ponto)
- Visualizar cada nota adicionada na tela em tempo real
- Calcular e exibir a média final das notas inseridas
- Receber validações de entrada (campo vazio, valor não numérico, fora do intervalo 0–10)

## ✨ Funcionalidades

- **Adicionar nota** — lê o valor do input, valida e exibe na lista de notas;
- **Calcular média** — soma todas as notas inseridas e exibe a média com 2 casas decimais;
- **Validação de entrada** — alerta o usuário em caso de campo vazio, valor inválido ou fora do intervalo;
- **Suporte a vírgula decimal** — converte vírgulas em pontos automaticamente.

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- Manipulação de DOM com `querySelector`, `createElement` e `addEventListener`

## 📁 Estrutura do projeto

```text
Tarefa_DOM_In-Junior/
└── Tarefa_Dom/
    ├── index.html        # Estrutura da calculadora de médias
    ├── script_Dom.js     # Lógica de manipulação do DOM
    └── style.css         # Estilos da aplicação
```

## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/marcosgomes-dev/Tarefa_DOM_In-Junior.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd Tarefa_DOM_In-Junior/Tarefa_Dom
   ```
3. Abra o arquivo `index.html` no navegador.

Recomenda-se usar a extensão **Live Server** do VS Code para uma experiência de desenvolvimento mais prática.

## Tecnologias

- JavaScript
- HTML
- CSS
- Navegador web

## Autor

Projeto desenvolvido como tarefa de manipulação de DOM na IN Junior.
