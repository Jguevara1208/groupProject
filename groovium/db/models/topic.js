'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    topic: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {});
  Topic.associate = function(models) {

    const likedTopicColumnMapping = {
      through: 'LikedTopic',
      foreignKey: 'topicId',
      otherKey: 'userId',
      as: 'topicLikes'
    }

    Topic.belongsToMany( models.User, likedTopicColumnMapping)
    Topic.hasMany( models.Story, { foreignKey: 'topicId' })
  };
  return Topic;
};
