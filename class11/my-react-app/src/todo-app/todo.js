import './todo.css';
import React, { useState } from "react";
function SimpleTodoApp() {
 const [todos, setTodos] = useState([]);
 const [inputText, setInputText] = useState('');

 const addTodo = (e) => {
 e.preventDefault();
 if (!inputText.trim()) return;

 const newTodo = {
 id: Date.now(),
 text: inputText,
 done: false
 };

 setTodos([...todos, newTodo]);
 setInputText('');
 };

 const toggleTodo = (id) => {
 setTodos(todos.map(todo =>
 todo.id === id ? { ...todo, done: !todo.done } : todo
 ));
 };

 const deleteTodo = (id) => {
 setTodos(todos.filter(todo => todo.id !== id));
 };

 return (
 <div className="todo-app">
 <h1>My Todo List</h1>

 <form onSubmit={addTodo}>
 <input
 type="text"
 value={inputText}
 onChange={(e) => setInputText(e.target.value)}
 placeholder="Add a new task..."
 />
 <button type="submit">Add</button>
 </form>
 <div className="todo-list">
 {todos.map(todo => (
 <div key={todo.id} className="todo-item">
 <input
 type="checkbox"
 checked={todo.done}
 onChange={() => toggleTodo(todo.id)}
 />
 <span className={todo.done ? 'done' : ''}>
 {todo.text}
 </span>
 <button onClick={() => deleteTodo(todo.id)}>
 Delete
 </button>
 </div>
 ))}
 </div>

 {todos.length === 0 && (
 <p>No tasks yet! Add one above.</p>
 )}
 </div>
 );
}

export default SimpleTodoApp;