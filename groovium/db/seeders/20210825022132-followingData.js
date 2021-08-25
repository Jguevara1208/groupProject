'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Follows', [
    //userId, followingId, createdAt, updatedAt
     { userId: 1, followingId: 2, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
     { userId: 1, followingId: 4, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
     { userId: 1, followingId: 6, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
     { userId: 2, followingId: 1, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
     { userId: 2, followingId: 4, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
     { userId: 2, followingId: 5, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
     { userId: 3, followingId: 2, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
     { userId: 3, followingId: 1, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
     { userId: 5, followingId: 1, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
     { userId: 5, followingId: 3, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
     { userId: 6, followingId: 1, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
     { userId: 7, followingId: 1, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
     { userId: 7, followingId: 3, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
     { userId: 7, followingId: 6, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
     { userId: 7, followingId: 4, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
   ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Follows', null, { truncate: true, cascade: true, restartIdentity: true })
  }
};
