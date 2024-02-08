//Import required packages
const express = require('express');
const mysql = require('mysql2');
const config = require('./config'); //Import config file

//Creating an express application
const app = express();

app.use(express.json());

//Creating a MySQLconnection pool
const pool = mysql.createPool(config.database);

//Defining the signUpUser function to insert user data into the database
function signUpUser(fullname, email, username, password) {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to MySQL database: ', err);
            return;
        }
        const query = 'INSERT INTO users (fullname, email, username, password) VALUES (?, ?, ?, ?)';
        connection.query(query, [fullname, email, username, password], (err, result) => {
            connection.release();
            if (err) {
                console.error('Error executing MySQL query: ', err);
                return;
            }
            console.log('User signed up successfully!');
 })     
});
}
//Defining a HTTP POST route to handle user sign up users
app.post('/signup', (req, res) => {
    const { fullname, email, username, password } = req.body;
    signUpUser(fullname, email, username, password);
    res.send('Signup successful! Redirecting to home page...');
});

//Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});