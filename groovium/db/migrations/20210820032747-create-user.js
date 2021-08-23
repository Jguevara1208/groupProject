'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(40)
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(40)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(150),
        unique: true
      },
      hashedPassword: {
        allowNull: false,
        type: Sequelize.STRING
      },
      avatarUrl: {
        allowNull: false,
        type: Sequelize.STRING
      },
      shortBio: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};