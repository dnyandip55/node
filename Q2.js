//create a node .js file that demonstrate create database student  DB and student 
// table(Rno.Sname,Percentage) in MySQL

const mysql = require('mysql2');

// Create a connection to the MySQL server
const connection = mysql.createConnection({
  host: 'localhost', //hostname
  user: 'root',      //username
  password: 'root@123', //password
});

// Connect to MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }

  console.log('Connected to MySQL server.');

  // Create the studentDB database
  connection.query('CREATE DATABASE IF NOT EXISTS studentDB', (err) => {
    if (err) {
      console.error('Error creating database:', err);
      connection.end();
      return;
    }

    console.log('studentDB database created.');

    // Use the studentDB database
    connection.query('USE studentDB', (err) => {
      if (err) {
        console.error('Error using database:', err);
        connection.end();
        return;
      }

      console.log('Using studentDB database.');

      // Create the student table with columns Rno, Sname, and Percentage
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS student (
          Rno INT PRIMARY KEY,
          Sname VARCHAR(255) NOT NULL,
          Percentage DECIMAL(5, 2) NOT NULL
        )
      `;

      connection.query(createTableQuery, (err) => {
        if (err) {
          console.error('Error creating table:', err);
        } else {
          console.log('student table created.');
        }

        // Close the MySQL connection
        connection.end();
      });
    });
  });
});
