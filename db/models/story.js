'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    userId: DataTypes.INTEGER,
    topicId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    readTimeMinutes: DataTypes.INTEGER,
    storyImgUrl: DataTypes.STRING
  }, {});
  Story.associate = function(models) {
    // associations can be defined here
  };
  return Story;
};