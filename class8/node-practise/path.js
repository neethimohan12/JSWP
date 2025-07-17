const path = require('path');
console.log(path.join('folder', 'subfolder', 'file.txt'));
// folder/subfolder/file.txt (Unix)
// folder\subfolder\file.txt (Windows)
console.log(path.extname('script.js')); // .js
console.log(path.basename(`${process.argv[1]}`));
 // file.txt
 console.log(`${process.argv[1]}`);