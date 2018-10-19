
exports.up = function(knex, Promise) {
  return knex.scheme.createTable('cards_table', (card) => {
      card.increments('id')
  })
};

exports.down = function(knex, Promise) {
  
};
