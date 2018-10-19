
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards_table', (card) => {
        card.increments('id')
        card.string('name')
        card.string('type')
        card.string('img')
        card.string('desc')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cards_table')
};
