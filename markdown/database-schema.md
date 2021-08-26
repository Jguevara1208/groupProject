# Database Tables

## Users
| Column Name    	| Data Type   	| Details          	|
|----------------	|-------------	|------------------	|
| id             	| integer     	| primary key      	|
| firstName      	| string(40)  	| not null         	|
| lastName       	| string(40)  	| not null         	|
| email          	| string(150) 	| not null, unique 	|
| hashedPassword 	| string(255) 	| not null         	|
| avatarUrl      	| string(255) 	| not null         	|
| shortBio       	| text        	| not null         	|
| createdAt      	| datetime    	| not null         	|
| updatedAt      	| datetime    	| not null         	|

<br>
<br>

## Topics
| Column Name   | Data Type     | Details       |
|-------------  |------------   |-------------  |
| id            | integer       | primary key   |
| topic         | string(50)    | not null      |
| createdAt     | datetime      | not null      |
| updatedAt     | datetime      | not null      |

<br>
<br>



## Stories
| Column Name     | Data Type   | Details     |
|-----------------|-------------|-------------|
| id              | integer     | primary key |
| userId          | integer     | not null    |
| topicId         | integer     | not null    |
| title           | string(100) | not null    |
| body            | text        | not null    |
| readTimeMinutes | integer     | not null    |
| storyImgUrl     | string(255) | not null    |
| createdAt       | datetime    | not null    |
| updatedAt       | datetime    | not null    |

<br>

- `userId` references `Users(id)`
- `topicId` references `Topics(id)`

<br>
<br>

## Comments
| Column Name | Data Type   | Details     |
|-------------|-------------|-------------|
| id          | integer     | primary key |
| content     | string(400) | not null    |
| userId      | integer     | not null    |
| storyId     | integer     | not null    |
| createdAt   | datetime    | not null    |
| updatedAt   | datetime    | not null    |

<br>

- `userId` references `Users(id)`
- `storyId` references `Stories(id)`

<br>
<br>

## Liked Topics
| Column Name | Data Type | Details     |
|-------------|-----------|-------------|
| id          | integer   | primary key |
| userId      | integer   | not null    |
| topicId     | integer   | not null    |
| createdAt   | datetime  | not null    |
| updatedAt   | datetime  | not null    |

<br>

- `userId` references `Users(id)`
- `topicId` references `Topics(id)`

<br>
<br>

## Likes
| Column Name | Data Type | Details     |
|-------------|-----------|-------------|
| id          | integer   | primary key |
| userId      | integer   | not null    |
| storyId     | integer   | not null    |
| createdAt   | datetime  | not null    |
| updatedAt   | datetime  | not null    |

<br>

- `userId` references `Users(id)`
- `storyId` references `Stories(id)`

<br>
<br>

## Follows
| Column Name | Data Type | Details     |
|-------------|-----------|-------------|
| id          | integer   | primary key |
| userId      | integer   | not null    |
| followingId | integer   | not null    |
| createdAt   | datetime  | not null    |
| updatedAt   | datetime  | not null    |

<br>

- `userId` references `Users(id)`
- `followingId` references `Users(id)`


<br>
<br>

## Bookmarks
| Column Name | Data Type | Details     |
|-------------|-----------|-------------|
| id          | integer   | primary key |
| userId      | integer   | not null    |
| storyId     | integer   | not null    |
| createdAt   | datetime  | not null    |
| updatedAt   | datetime  | not null    |

<br>

- `userId` references `Users(id)`
- `storyId` references `Stories(id)`

