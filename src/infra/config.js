try {
  const dotenv = require('dotenv')
  dotenv.load()
} catch (e) { }

module.exports = {
  'development': {
    'username': process.env.USERDB,
    'password': process.env.PASSWORD,
    'database': process.env.DATABASE,
    'serverToken': process.env.SERVER_TOKEN,
    'host': 'localhost',
    'dialect': 'postgres'
  },
  'test': {
    'use_env_variable': 'DATABASE_URL_TEST',
    'serverToken': process.env.SERVER_TOKEN,
    dialectOptions: { ssl: true }
  },
  'production': {
    'use_env_variable': 'DATABASE_URL',
    'serverToken': process.env.SERVER_TOKEN,
    dialectOptions: { ssl: true }
  }
}
