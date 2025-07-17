// This is all you need!
const express = require('express');
const app = express();
// app.get('/', (req, res) => {
//  res.send('Hello World!');
// });

app.get('/aboutus', (req, res) => {
 res.send('Abouts us');
});

app.get("/:name",(req,res) => {
    const name = req.params.name;
    console.log(`you sent ${name}`);
    res.send(`you sent this ${name}`);
});
app.listen(3000,() =>{
    console.log("Running on port 3000");
});