'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    topic: DataTypes.STRING
  }, {});
  Topic.associate = function(models) {
    
    const likedTopicColumnMapping = {
      through: 'likedTopic',
      foreignKey: 'topicId',
      otherKey: 'userId',
    }

    Topic.belongsToMany( models.User, likedTopicColumnMapping)
    Topic.hasMany( models.Story, { foreignKey: 'topicId' })
  };
  return Topic;
};