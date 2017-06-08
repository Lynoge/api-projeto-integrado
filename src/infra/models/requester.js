export default (sequelize, DataTypes) => {
  var Requester = sequelize.define('Requester', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: function (models) {
        Requester.belongsTo(models.User, {
          foreignKey: 'id'
        })
      }
    },
    tableName: 'Requester',
    undercored: false,
    updatedAt: false,
    createdAt: false
  })

  return Requester
}
