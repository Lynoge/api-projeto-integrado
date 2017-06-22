export default (sequelize, DataTypes) => {
  const Requester = sequelize.define('Requester', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: (models) => {
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
