# Carrinho de Compras

Este projeto é uma página de carrinho de compras desenvolvida para aplicar os conhecimentos adquiridos nas últimas semanas em diversas tecnologias de frontend e backend.

## 🚀 Tecnologias Utilizadas

- **Frontend**:
  - [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário.
  - [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript que adiciona tipagem estática ao código.
  - [SCSS](https://sass-lang.com/) - Pré-processador CSS que permite uma escrita mais limpa e modular.
  - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Linguagem de marcação para estruturação do conteúdo.

- **Backend**:
  - [Docker](https://www.docker.com/) - Plataforma para automação de aplicativos com contêineres.
  - [MySQL](https://www.mysql.com/) - Sistema de gerenciamento de banco de dados relacional.
  - [Express](https://expressjs.com/) - Framework web minimalista para Node.js.
  - [Axios](https://axios-http.com/) - Cliente HTTP baseado em Promises para fazer requisições.

## 🎯 Objetivo

O principal objetivo deste projeto foi consolidar e aplicar o conhecimento adquirido nas tecnologias mencionadas acima. A página de carrinho de compras simula a experiência de um usuário em um site de e-commerce, permitindo adicionar, remover e visualizar produtos, além de calcular o total do carrinho.

## 📂 Estrutura do Projeto

```bash
├── backend/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── src/
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── README.md
└── ...
```

- **backend/**: Contém o código do servidor Express, configuração do banco de dados MySQL e arquivos de configuração Docker.
- **frontend/**: Contém o código da aplicação React com TypeScript e SCSS para estilização.

## 🛠️ Configuração do Ambiente

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Passos para rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/carrinho-de-compras.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd carrinho-de-compras
   ```

3. Inicie os contêineres Docker:
   ```bash
   cd backend
   docker-compose up -d
   ```

4. Instale as dependências do frontend:
   ```bash
   cd ../frontend
   npm install
   ```

5. Inicie o servidor de desenvolvimento do frontend:
   ```bash
   npm start
   ```

O frontend estará disponível em `http://localhost:5173` e o backend em `http://localhost:3333`.
