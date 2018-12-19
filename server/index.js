require('dotenv').config()

const express = require('express')
const {SERVER_PORT} = process.env

const app = express()


app.listen(SERVER_PORT, ()=>{
  console.log(`My power level is over ${SERVER_PORT}!!!!!!`)
})