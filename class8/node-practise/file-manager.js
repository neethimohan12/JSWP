// file-manager.js
const fs = require('fs');
// Create a log file
function createLog() {
 const time = new Date().toLocaleString();
 const message = `Log created at ${time}\n`;
 fs.writeFileSync('activity.log', message);
 console.log('Log file created!');
}
// Add to log
function addEntry(text) {
 const entry = `${new Date().toLocaleString()}: ${text}\n`;
 fs.appendFileSync('activity.log', entry);
 console.log('Entry added!');
}
// Try it
createLog();
addEntry('Started learning Node.js');
addEntry('Created my first file');