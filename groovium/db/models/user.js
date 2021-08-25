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
      as: 'bookmark'
    }

    const likesColumnMapping = {
      through: 'Like',
      foreignKey: 'userId',
      otherKey: 'storyId',
      as: 'likes'
    }

    const likedTopicColumnMapping = {
      through: 'LikedTopic',
      foreignKey: 'userId',
      otherKey: 'topicId',
      as: 'likedTopics'
    }

    const followingColumnMapping = {
      through: 'Follow',
      foreignKey: 'userId',
      otherKey: 'followerId',
      as: 'following'
    }

    const followerColumnMapping = {
      through: 'Follow',
      foriegnKey: 'followerId',
      otherKey: 'userId',
      as: 'follower'
    }

    User.hasMany( models.Story, { foreignKey: 'userId' })
    User.hasMany( models.Comment, { foreignKey: 'userId' })

    User.belongsToMany( models.User, followingColumnMapping)
    User.belongsToMany( models.User, followerColumnMapping)

    User.belongsToMany( models.Topic, likedTopicColumnMapping)
    User.belongsToMany( models.Story, likesColumnMapping)
    User.belongsToMany( models.Story, bookMarkColumnMapping)

  };
  return User;
};
