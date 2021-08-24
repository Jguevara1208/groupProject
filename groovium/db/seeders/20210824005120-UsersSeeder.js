'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
   { firstName: "Elon", lastName: "Musk", email:"elon@elonmusk.com", hashedPassword: "ksumnole", avatarUrl: "https://media.gettyimages.com/photos/spacex-owner-and-tesla-ceo-elon-musk-arrives-on-the-red-carpet-for-picture-id1229892421?k=6&m=1229892421&s=612x612&w=0&h=Y-zn0kGUZso6pMTZbfqa5eU93isq5cdEjF-H11mJ3wk=", shortBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", createdAt: '2021-08-20', updatedAt: '2021-08-21'},
   { firstName: "Mark", lastName: "Zuckerburg", email:"mark@markieZ.com", hashedPassword: "Zkram", avatarUrl: "https://media.gettyimages.com/photos/founder-and-ceo-of-facebook-mark-zuckerber-gives-his-speach-during-picture-id511574484?k=6&m=511574484&s=612x612&w=0&h=9l4ssSZWYOncfg1pUkL2BAKBzGJoFZ6DUza9q8DR7D8=", shortBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", createdAt: '2021-08-20', updatedAt: '2021-08-21'},
   { firstName: "Tim", lastName: "Cook", email:"tim@timcantcook.com", hashedPassword: "koocmit", avatarUrl: "https://media.gettyimages.com/photos/apple-ceo-tim-cook-attends-apple-tvs-the-morning-show-world-premiere-picture-id1184094970?k=6&m=1184094970&s=612x612&w=0&h=mF6SkTMPrNkexLj3OO9qBWQ4BTEj8h45Ee36zFpFHbo=", shortBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", createdAt: '2021-08-20', updatedAt: '2021-08-21'},
   { firstName: "Jeffery", lastName: "Bezos", email:"bezos@justcallmejeff.com", hashedPassword: "sozebffej", avatarUrl: "https://media.gettyimages.com/photos/jeff-bezos-attends-wired25-summit-wired-celebrates-25th-anniversary-picture-id1052207354?k=6&m=1052207354&s=612x612&w=0&h=unVLje6yxD12-xiUyRXyi2lcX-dJPFyASCigtDmGw_g=", shortBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", createdAt: '2021-08-20', updatedAt: '2021-08-21'},
   { firstName: "Reed", lastName: "Hastings", email:"Reed@goodbyeblockbuster.com", hashedPassword: "blockbusted", avatarUrl: "https://media.gettyimages.com/photos/cofounder-and-ceo-of-netflix-reed-hastings-attends-a-red-carpet-for-picture-id493806484?k=6&m=493806484&s=612x612&w=0&h=OufCpOsWhoVs6j_89HWrXIWDahHifY4V8ybYzomfcvU=", shortBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", createdAt: '2021-08-20', updatedAt: '2021-08-21'},
   { firstName: "Sundar", lastName: "Pichai", email:"sundar@pichai.com", hashedPassword: "radnus", avatarUrl: "https://media.gettyimages.com/photos/chief-executive-officer-of-google-inc-sundar-pichai-is-photographed-picture-id830227830?k=6&m=830227830&s=612x612&w=0&h=V8PNCg7yF-rfeag56QHAiau6iRuWVZ142BzqxjE4f2g=", shortBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", createdAt: '2021-08-20', updatedAt: '2021-08-21'}
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Users', null, {});
  }
};
