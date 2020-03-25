/**
 * Rota / Recurso
 */

/**
 * M�todos HTTP:
 * 
 * GET: Buscar/listar uma informa��o do back-end
 * POST: Criar uma informa��o no back-end
 * PUT: Alterar uma informa��o no back-end
 * DELETE: Deletar uma informa��o no back-end
 */

 /**
  * Tipos de par�metro?
  * 
  * Query Params: Par�metros nomeados enviados na rota ap�s "?" (Filtros, pagina��o)
  * Route Params: Par�metros utilizados para identificar recursos
  * Request Body: Corpo da requisi��o, utilizado para criar ou alterar recursos
  */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, Couch DB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);