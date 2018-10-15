// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'subversion',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      host: 'ec2-184-73-197-211.compute-1.amazonaws.com'
      database: 'da4lm1jl6mmb1i',
      user:     'mcdkhzcavrfeic',
      password: 'd7153584472d61f360c735b07132364818a21cf1f17f2c0dfd6086caea811398'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'subversion',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
