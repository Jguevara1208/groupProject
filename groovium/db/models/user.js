'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    avatarUrl: DataTypes.STRING,
    shortBio: DataTypes.TEXT
  }, {});
  User.associate = function(models) {

    const bookMarkColumnMapping = {
      through: 'Bookmark',
      foreignKey: 'userId',
      otherKey: 'storyId',
    }

    const likesColumnMapping = {
      through: 'Like',
      foreignKey: 'userId',
      otherKey: 'storyId',
    }

    const likedTopicColumnMapping = {
      through: 'likedTopic',
      foreignKey: 'userId',
      otherKey: 'topicId',
    }

    //TODO: add a belongsToMany

    User.belongsToMany( models.Topic, likedTopicColumnMapping)
    User.belongsToMany( models.Story, likesColumnMapping)
    User.belongsToMany( models.Story, bookMarkColumnMapping)

    User.hasMany( models.Story, { foreignKey: 'userId' })
    User.hasMany( models.Comment, { foreignKey: 'userId' })
  };
  return User;
};