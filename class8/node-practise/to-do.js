// todo.js
// Get command from user
const command = process.argv[2];
const task = process.argv[3];
if (command === 'add') {
 console.log(`Added task: ${task}`);
} else if (command === 'list') {
 console.log('Your tasks:');
 console.log('- Learn Node.js');
 console.log('- Build a project');
} else {
 console.log('Commands: add, list');
}
