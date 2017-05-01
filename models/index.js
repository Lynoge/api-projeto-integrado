import fs from 'fs'
import Sequelize from 'sequelize'
import path from 'path'
import config from '../config'

const basename = path.basename(module.filename)
const DBconfig = config[process.env.NODE_ENV]
let db = {}

const sequelize = process.env.NODE_ENV === 'development'
  ? new Sequelize(DBconfig.database, DBconfig.username, DBconfig.password, DBconfig)
  : new Sequelize(process.env[config.use_env_variable])

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
