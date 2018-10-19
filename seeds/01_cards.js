
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards_table').insert([{
          name: 'rowValue1',
          type: 'rowValue2',
          img: 'rowValue3',
          desc: 'rowValue4'
        }
      ]);
    });
};
