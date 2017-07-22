export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false
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
    phone: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.DECIMAL(3, 2)
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    createAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updateAt: {
      type: DataTypes.DATE
    },
    type: {
      type: DataTypes.CHAR(1)
    },
    chatId: {
      type: DataTypes.STRING
    },
    token: {
      type: DataTypes.STRING
    },
    online: {
      type: DataTypes.BOOLEAN
    },
    latitude: {
      type: DataTypes.STRING
    },
    longitude: {
      type: DataTypes.STRING
    },
  }, {
      classMethods: {},
      tableName: 'User',
      undercored: false,
      updatedAt: false,
      createdAt: false
    })

  return User
}
