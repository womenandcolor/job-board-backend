exports.up = knex =>
  knex.schema.createTable("jobs_posting", table => {
    table.increments("id");
    table.string("organization");
    table.string("position");
    table.integer("location_id");
    table.string("website");
    // location id references the core_location table
    table
      .foreign("location_id")
      .references("id")
      .inTable("core_location");
  });

exports.down = knex => knex.schema.dropTable("jobs_posting");
