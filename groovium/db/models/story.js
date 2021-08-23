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
    const bookMarkColumnMapping = {
      through: 'Bookmark',
      foreignKey: 'storyId',
      otherKey: 'userId'
    }

    const likesColumnMapping = {
      through: 'Like',
      foreignKey: 'storyId',
      otherKey: 'userId',
    }

    Story.belongsToMany( models.User, likesColumnMapping)
    Story.belongsToMany( models.User, bookMarkColumnMapping)
    Story.belongsTo( models.Topic, { foreignKey: 'topicId' })
    Story.belongsTo( models.User, { foreignKey: 'userId' })
    Story.hasMany( models.Comment, { foreignKey: 'storyId' })
  };
  return Story;
};