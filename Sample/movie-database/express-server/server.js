// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password',
  database: 'moviedb',
  port : 3307,
});

// Connect to DB
db.connect(err => {
  if (err) console.log(err);
  else console.log('Connected to MySQL');
});

// GET all movies
app.get('/api/movies', (req, res) => {
  db.query('SELECT * FROM movies', (err, results) => {
    if (err) res.status(500).json(err);
    else res.json(results);
  });
});

// POST new movie
app.post('/api/movies', (req, res) => {
  const { title, year } = req.body;
  db.query('INSERT INTO movies (title, year) VALUES (?, ?)', [title, year], (err) => {
    if (err) res.status(500).json(err);
    else res.json({ message: 'Movie added' });
  });
});

// PUT rating
app.put('/api/movies/:id/rate', (req, res) => {
  const { rating } = req.body;
  const { id } = req.params;
  db.query('UPDATE movies SET rating = ? WHERE id = ?', [rating, id], (err) => {
    if (err) res.status(500).json(err);
    else res.json({ message: 'Rating updated' });
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));