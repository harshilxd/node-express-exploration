# Node Express Exploration Repository

## Basics of Express, getting started, and ejs.

1. Install Node on the computer. Express needs node. Check using `node -v`. Once you have node installed, run `npm init -y`. This creates a basic package.json file.
2. Install express. `npm -i express`. Installed nodemon for easy server updates - `npm -i nodemon`. Changed scripts in package.json and added - `"devStart": "nodemon server.js"` for automatic server updates. 
3. Made `server.js` and required express, made app, and added a `get` function for `/` which simply sends a 'Hi' message to the user. I can also send server status, I can send a file, but more importantly, I can send a json structured file.
4. We can also pass in html files in get. HTML files usually go in views folder. However, you need to first install a view engine. So install `npm i ejs`. We then need to set the view engine to ejs in server.js. change all html files to have .ejs.


## Router and routes
1. Instead of having a lot of get functions in the server, what we can do is make routes. We make a folder called routes. Let us say we add something called users.js. We first need to require express. We then make a `const router = express.Router()`. This router makes a mini version of the app in users.js. We do not need to write `/users/add` or `/users/`. We can handle that in server.js.
2. We then export the router from users.js. We import this in server.js using require. We then actually use the router - `app.use('/users', userRouter);`. Adding routes makes the server.js file much more managable. 


## Advanced Routing

1. 