// db.js
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: '127.0.0.1',        // Database hostname
  port: 3306,               // Database port
  user: 'root',             // MySQL username
  password: 'Root@2000',    // MySQL password
  database: 'school', // Replace with your MySQL database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

module.exports = connection;
