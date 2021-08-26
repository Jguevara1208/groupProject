'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('LikedTopics', [
      { userId:1, topicId:1, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:1, topicId:2, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:1, topicId:3, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:2, topicId:2, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:2, topicId:3, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:2, topicId:4, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:4, topicId:3, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:4, topicId:4, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:4, topicId:1, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:3, topicId:1, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:3, topicId:2, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:3, topicId:3, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:5, topicId:3, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:5, topicId:4, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:5, topicId:1, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:6, topicId:1, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:6, topicId:2, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:6, topicId:3, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:7, topicId:4, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:7, topicId:2, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:7, topicId:1, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { userId:7, topicId:3, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('LikedTopics', null, { truncate: true, cascade: true, restartIdentity: true })
  }
};
