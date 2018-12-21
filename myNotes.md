/***************/
/***ROUTING***/
/**************/

ROUTING - npm i react-router-dom / npm i react-router

react-router: comprises of the core routing components.
react-router-dom: comprises of the routing API required for browsers.
react-router-native: comprises of routing API for mobile applications.

<Switch> It will look through all the routes beneath it. It will match only the first one that applies. Which is where the 'exact' keyword comes into play. **The switch tag makes sure that only one route is displayed at a time. </Switch>

index.js -- i wrapped <App /> with <Router> which is defined on line 6 because it allows the rest of my app to be compatible with routing. I can also change the import statement to be -- import {HashRouter as Router,....} which makes it so that i dont need to use <HashRouter></HashRouter>

my routes.js was originally a export default() which allowed me to use escaping {routes} jsx. this matters because if i wanted my routes to keep track of anything via state. I would need to have routes.js be a class component that can keep track. Using routes then becomes <Routes />

after my third commit i discovered a neat trick called routing params and the match object. I originally had a folder with a component for each drop down option (6 of them). I deleted all of those drop down routes frome routes.js and replaced it with one route component to Shop.js. The route is '/shop/:category'. the /:(name of routing param here) is called the routing parameter which makes my application dynamic, i can now delete all of those other useless components. The match object located in Shop.js {this.props.match.params.category} is simply matching the routes with the drop down options that i originally had. Clicking on the drop down options still routes me to the proper place. 

/**************/
/***SERVER***/
/*************/

EXPRESS - npm i express

the three essential pieces of code needed to run the server is: 
1. const express = require('express') -- this is grabbing the main Express module that i installed (npm i express)
2. const app = express() -- since the express module is a function we can invoke it to create our app variable.
3. app.listen(SERVER_PORT, ()=>{console.log()}) -- technically i could stop after SERVER_PORT. The arrow function and console.log is only there to give me visual feedback that the server is running.

When i wrote these three things from memory my server didnt respond. I got this error -- 'react-scripts' is not recognized as an internal or external command, operable program or batch file -- this essentially means that i need to delete node_modules folder and run npm i again. ****** REVIEW WITH MENTORS ******It still didnt work and i remember that in the package.json file i needed to add line 35-36. ********

require('dotenv').config() - this allows me to use the .env in my project which contains private information regarding my code. add .env to .gitignore to make sure that it isnt pushed to github publically.

/**********************/
/***AUTHENTICATION***/
/*********************/

BCRYPT - npm i bcyrptjs

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


/****************/
/***Login.js***/
/***************/

async login(){} - This Function is simply referencing the post endpoint in index.js. After the endpoint location it takes in email, password. then it sets the new state to = '' which if logged in will remove the users info from the input boxes and automatically push them back to the main page. the reason why we have await keyword is because we want to make sure that the internet has a moment to process the information before it sets state. 

async createAccount(){} - This is essentially doing the same thing as the above function.

/******************************/
/***Displaying Images***/
/***With a route to go home***/
/******************************/

in navbar.js i was having some serious issues trying to display an image. What i was missing is that you need to import the image. Give it an alias name. import aliasName from 'url address' or if the image is saved locally in the project i will need to find it by doing '../../nameOfImage' ect... however keep in mind that it wont auto complete via some extensions i have. so i will have to find it myself and trust that it works. after that of course i need to do an <img src=> the difference this time from regular html is i need to escape JSX. <img src{aliasName}>

/*************/
/***AXIOS***/
/************/

Axios - npm i axios

Axios - In short this is a http request to our endpoints that have some sort of functionality. 

/******************************/
/***Query String Parameter***/
/*****************************/

This is used to query components for their key/value pairs. Because of the query string it allows me to request dynamic information from my database. we set the variable category = to this.props.match.params 

/***********************************/
/***Component Lifecycle Methods***/
/**********************************/
 https://reactjs.org/docs/react-component.html#the-component-lifecycle

 componentDidMount - 
 
 componentDidUpdate - placing the query string parameter in this method is the method that allows me to dynamically request information about the products from my database.
