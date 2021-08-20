npx sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string,hashedPassword:string,avatarUrl:string,shortBio:text


npx sequelize model:generate --name Topic --attributes topic:string


npx sequelize model:generate --name Story --attributes userId:integer,topicId:integer,title:string,body:text,readTimeMinutes:integer,storyImgUrl:string


npx sequelize model:generate --name Comment --attributes content:string,userId:integer,storyId:integer


npx sequelize model:generate --name LikedTopic --attributes userId:integer,topicId:integer


npx sequelize model:generate --name Like --attributes userId:integer,storyId:integer


npx sequelize model:generate --name Follow --attributes userId:integer,followingId:integer

npx sequelize model:generate --name Bookmark --attributes userId:integer,storyId:integer

