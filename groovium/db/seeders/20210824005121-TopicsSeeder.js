'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Topics', [
    { topic: "Food", imageUrl: "photosForGroovium/host-a-70s-dinner-party-and-well-tell-you-exactly-2-14024-1536260136-4_dblbig.jpeg", createdAt: '2021-08-21', updatedAt: '2021-08-22'},
    { topic: "Pets", imageUrl: "photosForGroovium/wiener-dog-dachshund-costumes-halloween-1.jpeg", createdAt: '2021-08-21', updatedAt: '2021-08-22'},
    { topic: "Sports", imageUrl: "photosForGroovium/1972-11-14-Bob-Weiss-fastbreak-v-SEA-BR.jpeg", createdAt: '2021-08-21', updatedAt: '2021-08-22'},
    { topic: "Tech", imageUrl: "photosForGroovium/1280-471515021-historic-macintosh-128k.jpeg", createdAt: '2021-08-21', updatedAt: '2021-08-22'}
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Topics', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
