// Import express
const express = require('express')
// Import router
const router = require('./routes/api')

// Init object of express
const app = express()

// Using middleware
app.use(express.json())
app.use(express.urlencoded())

// Using routing (route)
app.use(router)

// Defined port
app.listen(3000)
