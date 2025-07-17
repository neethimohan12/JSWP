const express = require('express');
const app = express();
app.use(express.json());
// Our "database" (just an array for now)
let todos = [
 { id: 1, task: 'Learn Express', done: false },
 { id: 2, task: 'Build an API', done: false }
];
// GET all todos
app.get('/api/todos', (req, res) => {
 res.json(todos);
});
// GET one todo
app.get('/api/todos/:id', (req, res) => {
 const id = parseInt(req.params.id);
 const todo = todos.find(t => t.id === id);

 if (todo) {
 res.json(todo);
 } else {
 res.status(404).json({ error: 'Not found' });
 }
});
// POST new todo
app.post('/api/todos', (req, res) => {
 const newTodo = {
 id: todos.length + 1,
 task: req.body.task,
 done: false
 };

 todos.push(newTodo);
 res.json(newTodo);
});
app.listen(3000);