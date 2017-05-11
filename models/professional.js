export default (sequelize, DataTypes) => {
  const Professional = sequelize.define('Professional', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.TEXT,
      length: 'long',
      allowNull: true
    },
    profissionId: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: function (models) {
        Professional.belongsTo(models.Profission, {
          foreignKey: 'profissionId'
        })
        Professional.belongsTo(models.User, {
          foreignKey: 'id'
        })
      }
    },
    tableName: 'Professional',
    undercored: false,
    updatedAt: false,
    createdAt: false
  })

  return Professional
}
