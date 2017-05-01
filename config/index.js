try {
  const dotenv = require('dotenv')
  dotenv.load()
} catch(e) {}

module.exports = {
  "development": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": "rentservice",
    "password": "",
    "database": "",
    "host": "127.0.0.1",
    "storage": "rentservice",
    "dialect": "sqlite"
  },
  "production": {
    "use_env_variable": "DATABASE_URL"
  }
}
