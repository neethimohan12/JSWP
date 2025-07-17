const fs = require('fs');
const path = require('path');
// Synchronous file operations
try {
 // Read
 //console.log(process.cwd() + "");
 const data = fs.readFileSync('input.txt','utf8');
 console.log('File contents:', data);
 // Write
 fs.writeFileSync('output.txt', 'Processed: ' + data);
 // Append
 fs.appendFileSync('log.txt', `\n${new Date()}: Operation completed`);
 // Check if exists
 if (fs.existsSync('config.json')) {
 const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
 console.log('Config loaded:', config);
 }
 // Create directory
 if (!fs.existsSync('output')) {
 fs.mkdirSync('output');
 }
 // List directory contents
 const files = fs.readdirSync('.');
 console.log('Files in current directory:', files);
} catch (error) {
 console.error('File operation failed:', error);
}