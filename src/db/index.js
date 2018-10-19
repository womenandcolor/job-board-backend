const config = {
  production: {
    client: "pg",
    connection: process.env.HEROKU_POSTGRESQL_BRONZE_URL,
    ssl: true
  },
  development: {
    client: "pg",
    connection: {
      host: "db",
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB
    }
  }
}

const env = process.env.NODE_ENV || 'development';
console.log(config[env])

const knex = require("knex")(config[env]);

module.exports = {
  db: knex
};
