'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.", userId: 1, storyId: 1, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ultrices sagittis orci a scelerisque. Id volutpat lacus laoreet non curabitur gravida arcu.', userId: 2, storyId: 1, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', userId: 3, storyId: 1, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque.', userId: 4, storyId: 1, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Gravida rutrum quisque non tellus orci ac auctor augue.', userId: 5, storyId: 1, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
      { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Gravida rutrum quisque non tellus orci ac auctor augue.', userId: 6, storyId: 1, createdAt: '2021-08-21', updatedAt: '2021-08-22'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, { truncate: true, cascade: true, restartIdentity: true })
  }
};
