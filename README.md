# bUyForSure (Orders API)

API REST desenvolvida em Node.js para gerenciamento de pedidos.

Projeto criado como parte de um teste técnico com objetivo de demonstrar conhecimentos em:

- desenvolvimento backend
- integração de sistemas
- boas práticas de arquitetura
- uso de PostgreSQL

## Tecnologias utilizadas

Node.js  
Express  
PostgreSQL  
Docker  
Jest  
Swagger/OpenAPI  
Winston

---

# Arquitetura

O projeto segue uma arquitetura em camadas:

controllers → recebem requisições HTTP  
services → lógica de negócio  
db → acesso ao banco de dados  
validations → validação de entrada  
logger → logs estruturados

Essa separação facilita manutenção, testes e escalabilidade da aplicação.

---

# Documentação da API

A documentação interativa pode ser acessada em:

http://localhost:3000/docs

Gerada automaticamente utilizando Swagger.

---

# Executando o projeto

## 1 - instalar dependências

npm install

## 2 - subir banco de dados

docker-compose up -d

## 3 - criar tabelas

psql -U dev -d orders_db -f migrations/create_tables.sql

## 4 - iniciar API

npm run dev

Servidor disponível em:

http://localhost:3000

---

# Executar testes

npm test

---

# Melhorias futuras

- paginação na listagem de pedidos
- autenticação JWT
- cache
- testes de integração
- pipeline CI/CD

---

# Autor

Leo Aboin