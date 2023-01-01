// Import express
const express = require('express')
// Import router
const router = require('./routes/api')

// Import dotenv
require('dotenv').config()
const { APP_PORT } = process.env

// Init object of express
const app = express()

// Using middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Using routing (route)
app.use(router)

// Defined port
app.listen(APP_PORT || 3000)
