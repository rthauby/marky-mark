
exports.up = function(knex) {
  return knex.schema
    .createTable('bookmark', function (table) {
       table.increments('id');
       table.string('url', 1024).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
      .dropTable('bookmark')
};
