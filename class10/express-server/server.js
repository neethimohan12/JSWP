const express = require('express');
const cors = require('cors');
const app = express();
// Enable CORS for Angular app
app.use(cors());
app.use(express.json());
// In-memory user storage
let users = [
 { id: 1, name: 'John Doe', email: 'john@example.com' },
 { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];
let nextId = 3;
// GET all users
app.get('/api/users', (req, res) => {
 res.json(users);
});
// GET single user
app.get('/api/users/:id', (req, res) => {
 const id = parseInt(req.params.id);
 const user = users.find(u => u.id === id);

 if (user) {
 res.json(user);
 } else {
 res.status(404).json({ error: 'User not found' });
 }
});
// POST new user
app.post('/api/users', (req, res) => {
 const { name, email } = req.body;

 if (!name || !email) {
 return res.status(400).json({ error: 'Name and email are required' });
 }

 const newUser = {
 id: nextId++,
 name,
 email
 };


 users.push(newUser);
 res.status(201).json(newUser);
});

// PUT update user
app.put('/api/users/:id', (req, res) => {
 const id = parseInt(req.params.id);
 const { name, email } = req.body;
 const userIndex = users.findIndex(u => u.id === id);

 if (userIndex === -1) {
 return res.status(404).json({ error: 'User not found' });
 }

 users[userIndex] = { ...users[userIndex], name, email };
 res.json(users[userIndex]);
});
// DELETE user
app.delete('/api/users/:id', (req, res) => {
 const id = parseInt(req.params.id);
 const userIndex = users.findIndex(u => u.id === id);

 if (userIndex === -1) {
 return res.status(404).json({ error: 'User not found' });
 }

 users.splice(userIndex, 1);
 res.status(204).send();
});
const PORT = 3000;
app.listen(PORT, () => {
 console.log(`User API server running on http://localhost:${PORT}`);
});