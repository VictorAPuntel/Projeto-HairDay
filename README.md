# 📅 Sistema de Agendamentos (HairDay)

Projeto desenvolvido com JavaScript puro para treinar manipulação de DOM, requisições HTTP com `fetch`, e o uso do JSON Server como backend fake. A aplicação permite visualizar horários disponíveis, realizar agendamentos e cancelá-los dinamicamente.

---

## 🚀 Funcionalidades

- Seleção de data para exibição de horários
- Validação de horários passados
- Visualização dos turnos (manhã, tarde, noite)
- Agendamento de horários disponíveis
- Cancelamento de agendamentos existentes
- Integração com JSON Server para simulação de backend

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- [Day.js](https://day.js.org/)
- [JSON Server](https://github.com/typicode/json-server)

---

## 📂 Estrutura do projeto

HairDay/
├── server.json # Banco de dados fake (JSON Server)
├── index.html
├── src/
│ ├── css/ # Estilos do projeto
│ └── js/
│ ├── main.js # Arquivo principal
│ ├── form/
│ │ └── hours-load.js # Lógica de carregamento dos horários
│ ├── services/
│ │ └── schedule-cancel.js # Chamada de cancelamento de agendamento
│ └── utils/
│ ├── api-config.js # Configuração da API base
│ └── opening-hours.js # Lista de horários fixos
└── README.md

---

## 🧪 Como rodar o projeto

1. Instale o JSON Server (caso ainda não tenha):

```bash
npm install -g json-server
