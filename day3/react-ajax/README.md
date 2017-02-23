# Facebook - React Edition

## Introduction

In Week 2 we built a Facebook feed using AJAX and jQuery.
[Check out the instructions for that exercise and read your solution reacquaint yourself
with the task at hand.](https://github.com/horizons-school-of-technology/week02/blob/master/day5/README.md)

We're going to rebuild that exercise using React.

### Getting started

The backend for the Facebook application is provided for you at: https://horizons-facebook.herokuapp.com/
A full API reference can be found below. (This is identical to the API we used
in week 2.)

You task is to implement the frontend of your application. Run `npm start` and
open `index.html` in your browser. Your React code will go in `client.js`.

If you want to add styling to your application you can add a `<style>` block to
`index.html` or create a `styles.css` file and link to it in your `index.html`.

### React Components

The React components we want you to build are below. We recommend you approach each
one as a step building off the other, but you may take the components in any
order you'd like. Keep in mind that many of these components rely on your
implementation of registering and authenticating a user.

1. **App**: As usual you will need a top level React component.
  It's going handle switching between all other components below.

1. **Registration**: You will need to allow a user to fill out a form to
register with email, password, first and last name.

2. **Login**: You will need to present existing users with a login that
authenticates with email and password. Upon successful login, our server will
return a token for you to use in subsequent requests.

3. **Posts**: For authenticated users, you will need to present a Newsfeed with
Post objects returned by our server and a component to allow users to submit
posts to the Newsfeed. Posts are plain-text and only have information on the
poster's name and time submitted.

  Inside **Posts** implement these features:

  1. **Create post**: Logged in users should have the ability create a new
  posts by specifying post contents.

  1. **Likes**: Each post will need to have a Like button to allow authenticated
  users to Like posts on the Newsfeed. Likes are stored as an array on each Post
  object and have information on the user who Liked the post.

  1. **Comments**: Each post will also need to allow users to Comment on Post
  objects - comments will also be stored as an array on each Post object and
  contain the comment contents and information on the commenter.

### Exercise 1. `<App />`

Your `App` component is responsible for displaying and switching between
main views inside your app, namely `Registration`, `Login` and `Posts`.

1. Store the currently active "page" of your app in `this.state.page` and
  and check it in your `render` function to alternate between the main
  components:

  [Hint](img/app.png)

1. Now you have to give your child components a way to change the currently
  active page. Create a `navigate` method in `App` that takes a new page
  and updates `this.state.page`:

  [Hint](img/navigate.png)

1. Pass `navigate` into your children using props:

  [Hint](img/pass-navigate.png)

1. Inside the child element call `navigate` through `this.props` to change
  the currently active page:

  [Hint](img/login-navigate.png)

### Exercise 2. `<Login />`

![](img/fb_login.png)

1. When a user clicks the `Register` button navigate to the Registration page using `this.props.navigate`
1. Create [controlled form fields](https://facebook.github.io/react/docs/forms.html)
  for email and password. Remember to set `value` to `this.state.SOMETHING HERE`
  and set an `onChange` handler that updates state.
1. When a user clicks the `Login` button make an AJAX request to the login
  endpoint in the backend. If the request succeeds save the token from the
  response so you can make authenticated requests later. Then navigate to the
  `posts` "page" so the user can see their feed.

  [Hint](img/login-ajax.png)

  One option for storing the the login token is in the `App` component state.
  You will need to pass another function from `App` to `Login` like you did
  with `navigate`. This new function should call `setState` to save the
  token. Once you have the token saved you can pass it into "pages"
  that require login (like `Posts`) via props so they can make authenticated
  requests.


### Exercise 3. `<Registration />`

[](img/fb_register.png)

1. Create [controlled form fields](https://facebook.github.io/react/docs/forms.html)
  for email, password, first and last name.
1. When the user clicks `Register` make an AJAX request to the register
  endpoint in the backend. If the request succeeds navigate to the `login`
  "page".

### Exercise 4. `<Posts />`

1. When this "page" first loads use `componentDidMount` to make an
  AJAX request to the backend and get posts. Save the posts you
  get from AJAX in `this.state`.
1. In your `render` function map posts you are storing in `this.state`
  to elements. Make sure to display the post contents, the date and time when
  the post was made, and the name of the author.
1. Add a post creation form with a controlled text input field and a `Post`
  button. When the `Post` button is clicked make an AJAX request to create post
  endpoint, if the request succeeds and add the new post to the array of posts in
  your `this.state`.

  ![](img/fb_post.png)

1. Add a `Like` button to each post. When the `Like` button is clicked make
  an AJAX request to the `likes` endpoint in the backend. If the request
  succeeds update `this.state` and increase the number of likes for the
  current post by 1.
1. Add a `Reply` button to each post. When this button is clicked prompt the
  user for the contents of the new comment then make an AJAX request to the
  `comments` endpoint, which if it succeeds should update `this.state` with
  the current comment.
1. Add `Logout` button at the bottom of the page that makes an AJAX request
  to the `logout` endpoint. If the request succeeds, clear the stored token
  and navigate to the `login` "page."

End result:

![](img/fb_feed.png)

### Bonus Exercises:

1. **Bonus: Relative Date**: Using `https://momentjs.com/` figure out a way to add relative time to all of your posts. So instead of an absolute date a post would have a date relative to the current date (i.e. posted 5 minutes ago).

1. **Double Bonus: Chat**: See *Using Sockets* for more information on how to implement Chat. You will be adding a chat section to your Facebook site to have a central chat feature for all users on your site.

# API Reference

Below are the live server specifications for accessing our "Facebook" API. All routes marked by a lock symbol (🔒) require you to pass in the token that you receive upon successful login. This token changes across users and sessions! Store it for authenticating each request as necessary. All authenticated requests are also rate-limited to 60/minute. _If you exceed the rate limit, please check the amount of requests you are sending._

⚠️ All requests below with a 🔒 next to the title require authentication.

### `POST` Register User
`url: https://horizons-facebook.herokuapp.com/api/1.0/users/register`


You must create your own account before accessing the login routes. In order to create a new user you should submit a `POST` request to the given url. The request must have the following information:
```javascript

{
  "fname": String, // The first name of the registering user
  "lname": String, // The last name of the registering user
  "email": String, // The email of the registering user, used for later authentication. Must not be the email of an existing user
  "password": String // The plaintext password of the registering user, used for later authentication. Don't worry, we've enforced strict HTTPS over the API and we hash and salt your password
}
```
Note that you can not make multiple user accounts with the same email, and all above information must be present in the request. If you do either of those things then the request will return a `400 Bad Request` error.

A successful user account registration request will result in the following **success** response:

```javascript

{
  "success": true,
  "response": {
    "__v": 0, // You may safely ignore __v
    "fname": String, // first name
    "lname": String, // last name
    "email": String, // email address
    "token": null, // unique token
    "password": String, // password
    "_id": String
  }
}
```

**Success Response**: 200 - `{success: true}`

**Failure Responses**:

* 400 - `{error: "Incomplete register definition."}` - You may have forgotten to pass in one or more of the required fields for registration. Check the spelling of your fields and make sure you are sending all your information in non-undefined values.

* 500 - `{error: "Failed to hash password."}` - Call a TA over. The password you sent is having issues being hashed on our server.

* 500 - `{error: "Failed to save the new user."}` - Call a TA over. You may be malformatting your request or the database may be overloaded.


### `POST` Login
`url: https://horizons-facebook.herokuapp.com/api/1.0/users/login`

This is the route you use for authentication. To login to your Horizons Facebook account you should submit a `POST` request the the above endpoint. The body of your request should contain the `email` and the `password` of the user that wants to login.

```javascript

{
  "email": String, // Email that identifies the user, set upon registration.
  "password": String // Password that verifies the user, set upon registration.
}
```

**Success Response**: 200 - `{success: true, response: {id: USER_ID, token: AUTH_TOKEN}}`

**Failure Responses**:

* 301 - Redirect to `GET /login` - `{error: "Login failed."}` - One or more of your authentication details was incorrect. Make sure you are sending the correct email and password you set upon registration and that these values are defined.

* 500 - `{error: "Failed to serialize user."}` - Call a TA over. There is an issue with your user account in the database.

### `GET` Login
**Note that this is a `GET` request while the one above is a `POST` request**

`url: https://horizons-facebook.herokuapp.com/api/1.0/users/login`

**This route will always return an error**; it is the URL that you are redirected to upon an unsuccessful login. If you are getting this every time, make sure that **a)** you are sending the correct email and password and **b)** you are POSTing login information to the login route.

**Response**: 401 - `{error: "Login failed."}`

### `GET` Posts Error
`url: https://horizons-facebook.herokuapp.com/api/1.0/posts/error`

You should not be calling this request manually; you will be redirected to this route if any of your `/posts` requests fail or you are not authorized to access the post routes.

**Response**: 401 - `{error: "Action not allowed. Please authenticate."}`

### `GET` Posts 🔒
`url: https://horizons-facebook.herokuapp.com/api/1.0/posts`


Returns the 10 most recent posts posted by users from the site. This is equivalent to `/posts/1`. The format for posts you will get back looks like the following:

**Success Response**: 200

```javascript

{
  "success": true,
  "response": [
    {
      "_id": "588afdbd7f87100011bce3f6",
      "poster": {
        "id": "588ab0967f87100011bce3f1",
        "name": "prath desai"
      },
      "content": "testing123",
      "createdAt": "2017-01-27T07:58:53.757Z",
      "__v": 0,
      "comments": [],
      "likes": []
    }
  ]
}
```

This is an example of a response with one post that has no comments and no likes. The `response` property, and each `comments` and `likes` property of a Post object are arrays. Make sure you manage this when handling the response of posts!

**Schema/Breakdown of `response`:**

* Response is an array of objects representing posts, all of which have:
* `_id`:  The ID of the post.
* `poster`: An object representing a user, which has:
* `id`: The ID of the user/poster.
* `name`: The first and last name of the user/poster.
* `content`: The text content of the post.
* `createdAt`: A date string representing the time the post was posted.
* `__v`: You may safely ignore `__v`.
* `comments`: An array of objects representing comments, which have:
* `poster`: An object representing a user, which has:
* `id`: The ID of the user/poster.
* `name`: The first and last name of the user/poster.
* `content`: The text content of the comment.
* `createdAt`: A date string representing the time the comment was posted.
* `likes`: An array of objects representing users that have liked the post, all of which have:
* `id`: The ID of the user that liked the post.
* `name`: The first and last name of the user that liked the post.

Both `comments` and `likes` could be empty arrays!

**Failure Responses**:

* 500 - `{error: "Failed to query posts."}` - Call a TA over. There is an issue in retrieving posts from our database.

### `POST` New Facebook Post (a.k.a. post a post) 🔒
`url: https://horizons-facebook.herokuapp.com/api/1.0/posts`

This route posts a new post to the central Newsfeed. This route takes the following required parameters:

```javascript

{
  "token": String, // AUTH_TOKEN
  "content": String // The text content of the new post.
}
```

If the request goes through successfully the API endpoint should respond with `JSON` that looks like this:

```javascript

{
  "success": true,
  "response": {
    "__v": 0,
    "poster": {
      "name": "prath desai",
      "id": "588ab0967f87100011bce3f1"
    },
    "content": "testing123",
    "createdAt": "2017-01-27T07:58:53.757Z",
    "_id": "588afdbd7f87100011bce3f6",
    "comments": [],
    "likes": []
  }
}
```

**Success Response**: 200 - `{success: true}`

**Failure Responses**:

* 400 - `{error: "No post content."}` - Your request did not include the `content` field correctly or you attempted to submit a blank post. Please check your AJAX request and make sure that you are sending your post contents correctly.

* 500 - `{error: "Failed to save the new post."}` - Call a TA over. There is an issue in saving posts to our database.

### `GET` Post, limit amount 🔒
`url: https://horizons-facebook.herokuapp.com/api/1.0/posts/:numberOfPosts`

This route returns post objects in the same format as the GET `/posts` request above, but in a way that allows you to select a particular amount of posts from history.

`:numberOfPosts` represents a number that paginates your selection of a group of 10 posts. For example, `/posts/1` will return you the first 10 posts, `/posts/2` will return you the next 10 posts, and `/posts/3` will return you the next 10 posts after that. Posts are sorted by time and higher numbers for `:numberOfPosts` represent posts from longer ago.

Note that if fewer than 10 posts exist, requesting `/posts/2/` will give you back an empty array. The same applies for fewer than 20 posts and `/posts/3` and so on. Any `GET` request for posts from the server will return you a maximum of 10 posts.

**Success Response**: 200 - See above for schema/example of a posts response.

**Failure Responses**:

* 500 - `{error: "Failed to query posts."}` - Call a TA over. There is an issue in retrieving posts from our database.

### `GET` Comments of a Post 🔒
`url: https://horizons-facebook.herokuapp.com/api/1.0/posts/comments/:id`

This route gets all comments of a post by an ID (**of the post**, not the poster's user ID!). You get the post's ID through `GET /posts`, which is returned in each object representing a post as `_id`.

`:id` in this URL represents a 24-character long string that represents a post.

**Success Response**: 200

```javascript

{
  "success": true,
  "response": [
    {
      "_id": "588afdbd7f87100011bce3f6",
      "poster": {
        "id": "588ab0967f87100011bce3f1",
        "name": "prath desai"
      },
      "content": "testing123",
      "createdAt": "2017-01-27T07:58:53.757Z",
      "__v": 1,
      "comments": [
        {
          "createdAt": 1485505479658,
          "content": "this is a comment!",
          "poster": {
            "name": "prath desai",
            "id": "588ab0967f87100011bce3f1"
          }
        }
      ],
      "likes": []
    }
  ]
}
```

**Schema/Breakdown of `response`**:

* `response`: An array of objects representing comments, which have:
* `poster`: An object representing a user, which has:
* `name`: The first and last name of the user/poster.
* `id`: The ID of the user/poster.
* `content`: The text content of the comment.
* `createdAt`: A date string representing the time the comment was posted.


Note: This could return an empty array as the `response`! Also note that you may not need this route, as `GET /posts` will already return you the comments associated with each post.

**Failure Responses**:

* 500 - `{error: "Failed to get comments on a post."}` - This may mean that you are passing in an invalid ID for a post. Check to make sure that you are passing the `:id` as part of the URL and that you are passing in the ID for a post, not of a user.

### `POST` Comments 🔒
`url: https://horizons-facebook.herokuapp.com/api/1.0/posts/comments/:id`

This POST route is used to post comments to a post by a post ID (that's a lot of posting). Posting a comment with this route takes the following required parameters:

* `token`: Your `AUTH_TOKEN`
* `content`: The text content of the comment you are posting.

Note: The `:id` you specify must refer to a valid post ID - pass it in as part of the URL, not in the request body. This endpoint expects a `token` and `content`. This is what a successful response should look like:

```javascript
{
  "success": true,
  "response": {
    "_id": "588afdbd7f87100011bce3f6",
    "poster": {
      "id": "588ab0967f87100011bce3f1",
      "name": "prath desai"
    },
    "content": "testing123",
    "createdAt": "2017-01-27T07:58:53.757Z",
    "__v": 1,
    "comments": [
      {
        "createdAt": 1485505479658,
        "content": "this is a comment!",
        "poster": {
          "name": "prath desai",
          "id": "588ab0967f87100011bce3f1"
        }
      }
    ],
    "likes": []
  }
}
```

**Success Response**: 200 - `{success: true}`

**Failure Responses**:

* 500 - `{error: "Failed to post comments on post."}` - This may mean that you are passing in an invalid ID for a post. Check to make sure that you are passing the `:id` as part of the URL and that you are passing in the ID for a post, not of a user.

### `GET` Likes 🔒
`url: https://horizons-facebook.herokuapp.com/api/1.0/posts/likes/:id`

Liking a post always uses `GET` - there is no POSTing likes. Requesting this route will NOT return the existing likes on a post - it will toggle the existing state of whether the currently authenticated user has liked the post corresponding to `:id` or not.

Notice the difference in the new response from the `API` once the `/posts/likes/:id` endpoint has been hit:

```javascript
{
  "success": true,
  "response": {
    "_id": "588afdbd7f87100011bce3f6",
    "poster": {
      "id": "588ab0967f87100011bce3f1",
      "name": "prath desai"
    },
    "content": "testing123",
    "createdAt": "2017-01-27T07:58:53.757Z",
    "__v": 2,
    "comments": [
      {
        "createdAt": 1485505479658,
        "content": "this is a comment!",
        "poster": {
          "name": "prath desai",
          "id": "588ab0967f87100011bce3f1"
        }
      }
    ],
    "likes": [
      {
        "name": "prath desai",
        "id": "588ab0967f87100011bce3f1"
      }
    ]
  }
}
```

### `GET` Logout
`url: https://horizons-facebook.herokuapp.com/api/1.0/users/logout`

This endpoint allows you to safely logout and destroy the token you received on login. The `AJAX` request url should have the `AUTH_TOKEN` in it (i.e. `https://horizons-facebook.herokuapp.com/api/1.0/users/logout?token=insert-token-here`. If the request is successful, you should get a `{success: true}` response.
