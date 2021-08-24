'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Stories', [], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Stories', null, {});
  }
};
