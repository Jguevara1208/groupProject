'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Stories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" }
      },
      topicId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Topics" }
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      body: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      readTimeMinutes: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      storyImgUrl: {
        allowNull: false,
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Stories');
  }
};