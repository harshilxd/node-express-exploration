# Node Express Exploration Repository

## What I did and why?

1. Install Node on the computer. Express needs node. Check using `node -v`. Once you have node installed, run `npm init -y`. This creates a basic package.json file.
2. Install express. `npm -i express`. Installed nodemon for easy server updates - `npm -i nodemon`. Changed scripts in package.json and added - `"devStart": "nodemon server.js"` for automatic server updates. 
3. Made `server.js` and required express, made app, and added a `get` function for `/` which simply sends a 'Hi' message to the user. I can also send server status, I can send a file, but more importantly, I can send a json structured file.
4. We can also pass in html files in get. HTML files usually go in views folder. However, you need to first install a view engine. So install `npm i ejs`. We then need to set the view engine to ejs in server.js. change all html files to have .ejs.