'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
     { firstName: "Julia", lastName: "Child", email: "julia@juliachild.com", hashedPassword: "ksumnole", avatarUrl: "https://atthepass.files.wordpress.com/2009/12/julia_child9.jpg", shortBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", createdAt: '2021-08-20', updatedAt: '2021-08-21'},
     { firstName: "Mary", lastName: "Jane", email: "mary@.jane.com", hashedPassword: "Zkram", avatarUrl: "https://media.gettyimages.com/photos/4th-march-1974-five-children-and-their-dog-demonstrate-the-roomy-boot-picture-id3135956?k=20&m=3135956&s=612x612&w=0&h=gcU2JLJnDOTP8eyDeaIUVkc1Di7xF4RmEgcrfvIjgd8=", shortBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", createdAt: '2021-08-20', updatedAt: '2021-08-21'},
     { firstName: "Harrison", lastName: "Schmitt", email: "Harrison@schmitty.com", hashedPassword: "koocmit", avatarUrl: "https://media.gettyimages.com/photos/harrison-h-schmitt-pilot-of-the-lunar-module-stands-on-the-lunar-picture-id113493203?k=20&m=113493203&s=612x612&w=0&h=rzPaUxbw_l7unI1JdYqXyS5s8ED5itZPYPZ6fUHWukY=", shortBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", createdAt: '2021-08-20', updatedAt: '2021-08-21'},
     { firstName: "Hank", lastName: "Aaron", email: "hank@aaron.com", hashedPassword: "sozebffej", avatarUrl: "https://www.retrowaste.com/wp-content/uploads/2013/03/Hank-Aaron-715th-Home-Run.jpg", shortBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", createdAt: '2021-08-20', updatedAt: '2021-08-21'},
     { firstName: "Dorathy", lastName: "Todo", email: "Dorathy@goodbyeblockbuster.com", hashedPassword: "blockbusted", avatarUrl: "https://www.thehonestkitchen.com/blog/wp-content/uploads/2017/04/1Toto.jpg", shortBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", createdAt: '2021-08-20', updatedAt: '2021-08-21'},
     { firstName: "Muhammad", lastName: "Ali", email: "ali@ali.com", hashedPassword: "radnus", avatarUrl: "https://piximus.net/media/17879/famous-people-in-the-70s-17.jpg", shortBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", createdAt: '2021-08-20', updatedAt: '2021-08-21'},
     { firstName: "test", lastName: "test", email: "test@test.com", hashedPassword: "$2a$10$ntmNVj1mpMUSmvbUHTpg3.TgHwGBihi95KyZ0pNQJFqf4.ZWxSmh.", avatarUrl: "https://www.google.com/search?q=jaque+pepin+from+70s&tbm=isch&ved=2ahUKEwig6eiMjs_yAhUQt54KHbQTD7IQ2-cCegQIABAA&oq=jaque+pepin+from+70s&gs_lcp=CgNpbWcQA1DzF1i5HWD0IGgAcAB4AIABT4gBnwOSAQE2mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=lcEnYeDKGZDu-gS0p7yQCw&bih=1231&biw=1153&rlz=1C5CHFA_enUS945US945#imgrc=HJMRS2auEgZ4cM", shortBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", createdAt: '2021-08-20', updatedAt: '2021-08-21'}
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Users', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
