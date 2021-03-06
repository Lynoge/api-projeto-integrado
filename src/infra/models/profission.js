export default (sequelize, DataTypes) => {
  const Profission = sequelize.define('Profission', {
    id: {
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
      associate: (models) => {
      }
    },
    tableName: 'Profission',
    undercored: false,
    updatedAt: false,
    createdAt: false
  })

  return Profission
}
