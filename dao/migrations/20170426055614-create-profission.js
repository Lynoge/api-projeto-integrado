'use strict';
module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('Profission', {
			profissionId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			}
		});
	},
	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('Profission');
	}
};