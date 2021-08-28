# API endpoints
- '/bookmarks/:storyId' - POST
- '/bookmarks' - DELETE

- 'users/:id/follow' - POST
- 'users/:id/follow' - DELETE
- 'users/my-stories/:id/delete' - DELETE

- 'stories/:id/comments' - GET
- 'stories/:id/comments' - POST
- 'stories/:id/comments' - DELETE
- 'stories/:id/comments' - PATCH

- 'stories/:id/likes' POST
- 'stories/:id/likes' DELETE


# Client-side Routes

## Root Routes
- ### Home page
    - This is the landing page. It displays a set of stories and topics. It also has call to actions for sign-up and log-in
	    - **`GET`** - `'/'`

<br>

- ### Sign-Up Page
    - This page allows potentially new users to sign up.
		- **`GET`** - `'/sign-up'`
		- **`POST`** - `'/sign-up'`

<br>

- ### Log-in Page
	- This page allows users to log-in and view their own profile and stories.
		- **`GET`** - `'/log-in'`
		- **`POST`** - `'/log-in'`

<br>
<br>

# User Routes
## Route - `/users`
- ### User Home Page
	- This page allows users to view their own profile and stories.
		- **`GET`** - `'/'`

<br>

- ### Another User's Page
	- This page show another user's profile page, and follow that user.
		- **`GET`** - `'/:id'`
		- **`POST`** - `'/:id/follow'`

<br>


- This page allows users to view/create/update/delete their stories.
	- **`GET`** - `'/my-stories'`
	- **`GET`** - `'/my-stories/:id/edit'`
	- **`POST`** - `'/my-stories/:id/edit'`
	- **`GET`** - `'/my-stories/new'`
	- **`POST`** - `'/my-stories/new'`


<br>
<br>

# Stories
## Route - `/stories`

- ### Story Page
    - This page shows all stories.
		- **`GET`** - `'/:id'`

<br>
<br>

# Topics
## Route - `/topics`

- ### Topics list page
	- This page shows all the topics.
		- **`GET`** - `'/'`
- ### Topics follow page
	- This page will let you follow a topic.
		- **`POST`** - `'/:id/like'`
- ### Topics specific page
	- This page will show a specific topic
		- **`GET`** - `'/:id'`


