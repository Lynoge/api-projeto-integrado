import fs from 'fs'
import Sequelize from 'sequelize'
import path from 'path'

const basename = path.basename(module.filename)
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.json')[env]
let db = {}
let sequelize = {}

switch(process.env.NODE_ENV) {
  case 'development':
    sequelize = new Sequelize(
      process.env[config.database],
      process.env[config.username],
      process.env[config.password],
      config)
    break
  case 'test':
    sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config)
    break
  default:
    sequelize = new Sequelize(process.env[config.use_env_variable])
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .map(file => {
    const model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).map(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
