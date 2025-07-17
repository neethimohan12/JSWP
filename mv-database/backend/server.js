const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password',
  database: 'moviedb',
  port : 3307,
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected!');
});

// Routes

// Get all movies
app.get('/api/movies', (req, res) => {
  db.query('SELECT * FROM movies', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add movie
app.post('/api/movies', (req, res) => {
  const { title, rating } = req.body;
  db.query('INSERT INTO movies (title, rating) VALUES (?, ?)', [title, rating], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, title, rating });
  });
});

// // Search movie
// app.get('/api/search', (req, res) => {
//   const q = `%${req.query.q}%`;
//   db.query('SELECT * FROM movies WHERE title LIKE ?', [q], (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// 🟢 Search movies
app.get('/api/movies/search', (req, res) => {
  const q = req.query.q || '';
  db.query('SELECT * FROM movies WHERE title LIKE ?', [`%${q}%`], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// 🟢 Delete a movie
app.delete('/api/movies/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM movies WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

// 🟢 Rate a movie
app.post('/api/movies/:id/rate', (req, res) => {
  const { id } = req.params;
  const { rating } = req.body;
  db.query('UPDATE movies SET rating = ? WHERE id = ?', [rating, id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
