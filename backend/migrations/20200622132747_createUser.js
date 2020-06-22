
const TABLE_NAME = 'user'

exports.up = function(knex) {
    return knex.schema.createTable(TABLE_NAME, table => {
        table.increments()
        table.string('username')
        table.string('password_digest')
    }) 
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
