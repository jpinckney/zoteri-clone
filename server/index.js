require('dotenv').config()
const session = require('express-session')
const express = require('express')
const { SERVER_PORT, SECRET, CONNECTION_STRING, DEV } = process.env
const massive = require('massive')
const bcrypt = require('bcryptjs')

const app = express()

app.use(express.json())

/** Creating a session */
app.use(session({
  secret: SECRET,
  resave: false,
  saveUninitialized: true
}))

/** Database Connection */

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => {
    console.log(`What is ${SERVER_PORT}?!?`)
  })
})

/** Login */

app.post('/auth/login', async (req, res) => {
  let { email, password } = req.body
  const db = req.app.get('db')
  let users = await db.find_user([ email ])
  if (!users[ 0 ]) {
    return res.status(200).send({ Loggedin: false, message: 'Email not found!' })
  }
  let result = bcrypt.compareSync(password, users[ 0 ].password)
  if (result) {
    req.session.users = { email: users[ 0 ].email, id: users[ 0 ].id }
    return res.status(200).send({ Loggedin: true, message: 'Logged in successfully!' })
  } else {
    res.status(401).send({ Loggedin: false, message: 'Incorrect password!' })
  }
})

/** Create Account */

app.post('/auth/createaccount', async (req, res) => {
  let { email, password } = req.body
  // NOTE  The console will show me if the sign up functionality is working and will display what i type in the nodemon terminal
  console.log(email, password)
  const db = req.app.get('db')

  let users = await db.find_user([ email ])
  if (users[ 0 ]) {
    return res.status(200).send({ Loggedin: false, message: 'Email is already in use!' })
  } else {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(password, salt)
    let createdUser = await db.create_user([ email, hash ])
    console.log(createdUser);

    req.session.users = { email: createdUser[ 0 ].email, id: createdUser[ 0 ].id }
    res.status(200).send({ Loggedin: true, message: 'Account Creation Successful!' })
  }
})

app.get('/api/user-data', (req, res) => {
  if (req.session.users) {
    res.status(200).send(req.session.users)
  } else {
    res.status(401).send('Please log in to view account info!')
  }
})

app.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('http://localhost:3000')
})

app.get('/display', (req, res) => {
  console.log(req.query);
  const db = req.app.get('db')
  db.find_product_by_category(req.query.category).then(response => {
    console.log(response)
    res.status(200).send(response)
  })
})
