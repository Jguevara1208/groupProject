'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Topics', [
    { topic: "Food", createdAt: '2021-08-21', updatedAt: '2021-08-22'},
    { topic: "Pets", createdAt: '2021-08-21', updatedAt: '2021-08-22'},
    { topic: "Sports", createdAt: '2021-08-21', updatedAt: '2021-08-22'},
    { topic: "Tech", createdAt: '2021-08-21', updatedAt: '2021-08-22'}
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Topics', null, {});
  }
};
