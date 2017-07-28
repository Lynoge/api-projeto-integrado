export default (sequelize, DataTypes) => {
  const Visit = sequelize.define('Visit', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ratingProfessional: {
      type: DataTypes.DECIMAL(3, 2),
      allowNull: true
    },
    ratingRequester: {
      type: DataTypes.DECIMAL(3, 2),
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    professionalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Professional', key: 'id' }
    },
    requesterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Requester', key: 'id' }
    },
    canceled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      classMethods: {
        associate: (models) => {
          Visit.belongsTo(models.Requester, { foreignKey: 'requesterId' })
          Visit.belongsTo(models.Professional, { foreignKey: 'professionalId' })
        },
      },
      tableName: 'Visit',
      undercored: false,
      updatedAt: false,
      createdAt: false
    })

  return Visit
}