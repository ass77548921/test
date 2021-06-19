const mysql = require('mysql2');

// create database connection
const pool = mysql.createPool({ 
   host:'1m', 
    user: '15', 
    password: '1b1c',
    database: 'heroku1406'
  })

module.exports = pool.promise();
