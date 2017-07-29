export default (sequelize, DataTypes) => {
  const Chat = sequelize.define('Chat', {
    origin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'User', key: 'id' }
    },
    destiny: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'User', key: 'id' }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    /**
     * P -> Photo
     * T -> Text
     */
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      classMethods: {
        associate: (models) => {
          Chat.belongsTo(models.User, { foreignKey: 'destiny' })
        },
      },
      tableName: 'Chat',
      undercored: false,
      updatedAt: false,
      createdAt: false
    })

  return Chat
}
