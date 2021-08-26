'use strict';
module.exports = (sequelize, DataTypes) => {
  const LikedTopic = sequelize.define('LikedTopic', {
    userId: DataTypes.INTEGER,
    topicId: DataTypes.INTEGER
  }, {});
  LikedTopic.associate = function(models) {
  };
  return LikedTopic;
};