'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Topics', [
    { topic: "Food", imageUrl: "https://media.gettyimages.com/photos/hispanic-granddaughter-helping-grandmother-baste-turkey-picture-id71554077?k=6&m=71554077&s=612x612&w=0&h=anu9RSxV1lIofDwNwLmAlPOsjdfFW3ILpXp98_ERE18=", createdAt: '2021-08-21', updatedAt: '2021-08-22'},
    { topic: "Pets", imageUrl: "https://media.gettyimages.com/photos/lunch-picture-idHK6105-001?k=6&m=HK6105-001&s=612x612&w=0&h=XjywcV88OLFT7TSRJuTCKRsLDgan1ln6PqOGYF9-FpA=", createdAt: '2021-08-21', updatedAt: '2021-08-22'},
    { topic: "Sports", imageUrl: "https://media.gettyimages.com/photos/ali-glances-a-right-off-joe-frazier-during-the-7th-round-ali-won-a-picture-id517431678?k=6&m=517431678&s=612x612&w=0&h=NbVP3EP-nw_2stFqiaLTp9PQKWN8qK67kFOOHaNBZuc=", createdAt: '2021-08-21', updatedAt: '2021-08-22'},
    { topic: "Tech", imageUrl: "https://media.gettyimages.com/photos/man-works-at-a-computer-inside-the-computer-room-at-the-department-of-picture-id576832646?k=6&m=576832646&s=612x612&w=0&h=N2vls8HOdjOgmgC_UPPI_SEjTOpAwaq1RaxJ4nrRUh4=", createdAt: '2021-08-21', updatedAt: '2021-08-22'}
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Topics', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
