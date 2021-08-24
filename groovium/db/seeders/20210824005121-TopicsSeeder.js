'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Topics', [], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Topics', null, {});
  }
};
