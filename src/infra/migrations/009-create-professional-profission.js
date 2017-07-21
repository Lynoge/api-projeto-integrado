module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProfessionalProfission', {
      professionalId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Professional', key: 'id' }
      },
      profissionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Profission', key: 'id' }
      }
    },
      {
        tableName: 'ProfessionalProfission',
        uniqueKeys: {
          actions_unique: {
            fields: ['profissionId', 'professionalId']
          }
        }
      })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('ProfessionalProfission')
  }
}