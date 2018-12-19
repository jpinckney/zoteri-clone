/***************/
/***ROUTING***/
/**************/

react-router: comprises of the core routing components.
react-router-dom: comprises of the routing API required for browsers.
react-router-native: comprises of routing API for mobile applications.

<Switch> It will look through all the routes beneath it. It will match only the first one that applies. Which is where the 'exact' keyword comes into play. **The switch tag makes sure that only one route is displayed at a time. </Switch>

index.js -- i wrapped <App /> with <Router> which is defined on line 6 because it allows the rest of my app to be compatible with routing. I can also change the import statement to be -- import {HashRouter as Router,....} which makes it so that i dont need to use <HashRouter></HashRouter>

my routes.js was originally a export default() which allowed me to use escaping {routes} jsx. this matters because if i wanted my routes to keep track of anything via state. I would need to have routes.js be a class component that can keep track. Using routes then becomes <Routes />

/**************/
/***SERVER***/
/*************/

the three essential pieces of code needed to run the server is: 
1. const express = require('express') -- this is grabbing the main Express module that i installed (npm i express)
2. const app = express() -- since the express module is a function we can invoke it to create our app variable.
3. app.listen(SERVER_PORT, ()=>{console.log()}) -- technically i could stop after SERVER_PORT. The arrow function and console.log is only there to give me visual feedback that the server is running.

When i wrote these three things from memory my server didnt respond. I got this error -- 'react-scripts' is not recognized as an internal or external command, operable program or batch file -- this essentially means that i need to delete node_modules folder and run npm i again. ****** REVIEW WITH MENTORS ******It still didnt work and i remember that in the package.json file i needed to add line 35-36. ********

require('dotenv').config() - this allows me to use the .env in my project which contains private information regarding my code. add .env to .gitignore to make sure that it isnt pushed to github publically.

/**********************/
/***AUTHENTICATION***/
/*********************/

BCRYPT

BCRYPT - Is a package that is installed for user security purposes. It hashes their passwords to become essentially impossible to break down into the original password. 

let salt = bcrypt.genSaltSync(10)
let hash = bcrypt.hashSync(password, salt)
let result = bcrypt.compareSync(password, user[ 0 ].hash_value)


Salt - is an extra layer of security. (10) means that it will scramble the password ten times

Hash - when a user registers it stores their password on the database as a hashed value. 

compareSync - will take the users hashed password upon login and compare it against the orginal hashed password during the register process SCENARIO - if a users password is fluffykins it will be hashed and stored in the database. when the user comes back and tries to access their account using the password fluffykins, it will has that password and compare against the stored hashed password. if an imposter is trying to login using a wrong password it will still hash their incorrect password and compare it against the original hashed password.

/******************/
/***JAVASCRIPT***/
/*****************/

javascript runs code syncrously which means one line at a time. to handle this we use promises with .then() or async & await.
async & await are used to tell your code to freeze at a certain point. when trying to locate a user for a login we need to use await to give the internet sometime to find the user. otherwise the code will keep running and assume that nothing was ever found.

