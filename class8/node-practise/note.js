// notes.js
const fs = require('fs');
const action = process.argv[2];
const note = process.argv[3];
// Your task: Complete these functions!
function saveNote(text) {
 // TODO: Save note to notes.txt
   fs.appendFileSync('notes.txt', text + '\n', 'utf8');
  console.log(`Note added: "${text}"`);
}
function showNotes() {
 // TODO: Read and display notes.txt
 if (fs.existsSync('notes.txt')) {
    const data = fs.readFileSync('notes.txt', 'utf8');
    console.log("Your Notes:");
    console.log(data);
  } else {
    console.log("No notes found.");
  }
}
// Handle commands
if (action === 'add') {
 saveNote(note);
} else if (action === 'show') {
 showNotes();
}
