// server.js
const express = require('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json());
// Database setup
const connection = mysql.createConnection({
 host: 'localhost',
user: 'root',
password: 'Password',
database: 'myapp',
});

db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    process.exit(1); // Exit if DB fails
  } else {
    console.log('✅ Connected to MySQL database "todoapp"');
  }
});

// Routes
app.get('/api/todos', (req, res) => {
 db.query('SELECT * FROM todos', (err, results) => {
 if (err) {
 res.status(500).json({ error: err.message });
 } else {
 res.json(results);
 }
 });
});