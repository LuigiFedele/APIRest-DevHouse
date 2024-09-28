# API rest - DevHouse

## Documentos da aplicação:

https://app.swaggerhub.com/apis-docs/LUIGIFFEDELE/api-dev_house/1.0.0

<br>

## Como rodar a aplicação:

<br>


1 - Instalar as dependências:

```
yarn 
```

2 - Iniciar a aplicação:

```
yarn dev
```

<br>

## Apresentação geral da aplicação:

<br>

### Propósito:

O propósito principal no desenvolvimento desse projeto foi demonstrar meu conhecimento e habilidade no desenvolvimento de APIs REST utilizando Node e Express, bem como a aplicação dos conceitos de Clean Architecture, Clean Code e arquitetura MVC (Models , Views e Controllers).

<br>

### Features:

- CRUD Houses
- CRUD Reservas

<br>

### Escolha das tecnologias:

- Nodejs: aplicação feita inteira com o NodeJS.
- Express: Esse Framework é um dos mais populares para o desenvolvimento de aplicativos web com o Node.JS.
- Yup: Foi utilizado para fazer validações nos requires.
- Eslint: Padronização de código
- MongoDB: Banco de dados não relacional
- Swagger: Documentação da API

<br>

### Separação de camadas:

#### Sessions:

Camada resposável por criar e dar acesso ao usuário.

#### Houses:

Camada houses todos os usuários terão acesso.

#### Reserves:

Essa camada lista todas as casa reservada pelo usuário.

#### Dashboard:

Essa camada lista todas casas que o usuário criou.
