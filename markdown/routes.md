# API endpoints
- '/bookmarks' - POST
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

## User Routes
### Route - `/users`
User home page - '/' - GET
User stories list - '/my-stories' - GET
Story Edit - '/my-stories/:id/edit' - GET
Story Edit '/my-stories/:id/edit' - POST
New Story - '/my-stories/new' - GET
New Story - '/my-stories/new' - POST

Other User Profile Page '/:id' - GET
Follow other user '/:id/follow' - POST


<br>
<br>

## Stories
### Route - `/stories`

Story Page - '/:id' - GET

<br>
<br>

## Topics
### Route - `/topics`

Topics list page - '/' - GET
Follow topic page - '/:id/like' - POST
Specific Topic list - '/:id' - GET

<br>
<br>




STORY PAGE

TOPICS LIST PAGE

USER PROFILE PAGE

OTHER PROFILE PAGE

SPECIFIC TOPICS PAGE
