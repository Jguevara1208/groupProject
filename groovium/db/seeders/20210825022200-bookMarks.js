'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookmarks', [
      { userId: 7, storyId: 1, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId: 7, storyId: 4, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId: 7, storyId: 2, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId: 7, storyId: 6, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId: 7, storyId: 8, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId: 7, storyId: 9, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookmarks', null, { truncate: true, cascade: true, restartIdentity: true })
  }
};
