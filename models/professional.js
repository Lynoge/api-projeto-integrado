export default (sequelize, DataTypes) => {
  const Professional = sequelize.define('Professional', {
    professionalId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
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
      }
    },
    tableName: 'Professional',
    undercored: false,
    updatedAt: false,
    createdAt: false
  })

  return Professional
}
