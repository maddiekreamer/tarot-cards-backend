// Update with your config settings.

module.exports = {

    development: {
      client: 'pg',
      connection: 'postgresql://localhost/tarot-card-info'
    },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
    }
};


