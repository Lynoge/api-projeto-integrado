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
      length: 'long'
    }
  }, {
      classMethods: {
        associate: (models) => {
          Professional.belongsToMany(models.Profission, { through: 'ProfessionalProfission', foreignKey: 'professionalId' })
          models.Profission.belongsToMany(models.Professional, { through: 'ProfessionalProfission', foreignKey: 'profissionId' })
          Professional.belongsTo(models.User, { foreignKey: 'id' })
        }
      },
      tableName: 'Professional',
      undercored: false,
      updatedAt: false,
      createdAt: false
    })

  return Professional
}
