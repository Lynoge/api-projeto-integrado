try {
  const dotenv = require('dotenv')
  dotenv.load()
} catch (e) { }

module.exports = {
  'development': {
    'username': process.env.USERNAME,
    'password': process.env.PASSWORD,
    'database': process.env.DATABASE,
    'host': 'localhost',
    'dialect': 'postgres'
  },
  'test': {
    'use_env_variable': 'DATABASE_URL_TEST',
    dialectOptions: { ssl: true }
  },
  'production': {
    'use_env_variable': 'DATABASE_URL',
    dialectOptions: { ssl: true }
  }
}
