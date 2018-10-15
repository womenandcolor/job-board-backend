const knex = require("knex")({
  client: "pg",
  connection: process.env.HEROKU_POSTGRESQL_BRONZE_URL,
  ssl: true
});

module.exports = {
  db: knex
};
