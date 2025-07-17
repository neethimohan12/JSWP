const express = require('express');
const bookRoute = require("./routes/books");
const app = express();
// Home page
app.use("/api/books",bookRoute);
app.get('/', (req, res) => {
 res.send('# Home Page');
});
// About page
app.get('/about', (req, res) => {
 res.send('# About Us');
});
// Contact page
app.get('/contact', (req, res) => {
 res.send('# Contact Us');
});
// User profile with parameter
app.get('/user/:name', (req, res) => {
 const userName = req.params.name;
 res.send(`# Welcome, ${userName}!`);
});
app.listen(3002);
