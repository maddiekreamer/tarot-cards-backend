const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

listAll = () => database.select().from('cards_table').orderBy('id', 'desc')

module.exports = {
    listAll
}