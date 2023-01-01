// Import mysql
const mysql = require('mysql')

// Import dotenv and running config method
require("dotenv").config()

// Destructing dotenv
const {
    DB_HOST,
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE
} = process.env

/**
 * createConnection()
 * Creating connetion
 * 
 * @param {host, user, password, database}
 */
const db = mysql.createConnection({
    host: DB_HOST || 'localhost',
    user: DB_USERNAME || 'root',
    password: DB_PASSWORD || '',
    database: DB_DATABASE || '',
})

/**
 * connect()
 * Connecting to mysql database
 * 
 * @param callback (function)
 */
db.connect((err) => {
    return (err) ? console.log('Connection Error: ' + err.stack) : console.log('Connected to database')
})

module.exports = db