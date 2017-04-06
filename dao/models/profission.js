'use strict'
module.exports = function (sequelize, DataTypes) {
  var Profission = sequelize.define('Profission', {
    profissionId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function (models) {
      }
    },
    tableName: 'Profission',
    undercored: false,
    updatedAt: false,
    createdAt: false
  })
  return Profission
}
