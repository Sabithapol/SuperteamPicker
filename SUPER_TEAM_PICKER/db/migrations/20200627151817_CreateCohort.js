exports.up = function (knex) {
    return knex.schema.createTable("Cohorts", (table) => {
      table.increments("id").primary();
      table.string("name");
      table.text("members")
      table.string(" logo url")
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("Cohorts");
  };