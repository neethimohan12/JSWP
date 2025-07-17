const fs = require('fs');
// Read file
const content = fs.readFileSync('data.txt', 'utf8');
console.log(content);
// Write file
fs.writeFileSync('output.txt', 'Hello World!');