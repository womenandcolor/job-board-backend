const knex = require("knex")({
  client: "pg",
  connection: process.env.DB_CONNECTION_STRING,
  ssl: true
});

module.exports = {
  db: knex
};
