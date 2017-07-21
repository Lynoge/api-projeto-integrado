export default (sequelize, DataTypes) => {
  const ProfessionalProfission = sequelize.define('ProfessionalProfission', {
    professionalId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    profissionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: (models) => {
      }
    },
    tableName: 'ProfessionalProfission',
    undercored: false,
    updatedAt: false,
    createdAt: false
  })

  return ProfessionalProfission
}
