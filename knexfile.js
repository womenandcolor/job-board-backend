module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "womenandcolor",
      user: "postgres",
      password: "password"
    },
    migrations: {
      tableName: "node_migrations"
    }
  }
};
