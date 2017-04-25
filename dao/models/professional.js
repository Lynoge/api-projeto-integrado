'use strict';
module.exports = function (sequelize, DataTypes) {
    var Professional = sequelize.define('Professional', {
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
        }
    }, {
            classMethods: {
                associate: function (models) {
                    // associations can be defined here
                }
            },
            tableName: 'Professional',
            undercored: false,
            updatedAt: false,
            createdAt: false
        });
    return Professional;
};