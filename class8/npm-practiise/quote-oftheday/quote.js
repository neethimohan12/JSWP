const fs = require('fs');
const path = require('path');

// Read quotes file
const quotesPath = path.join(__dirname, 'quotes.txt');
const data = fs.readFileSync(quotesPath, 'utf8');

// Split by line and pick random quote
const quotes = data.split('\n').filter(q => q.trim() !== '');
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(`\n🌟 Quote of the Day:\n"${randomQuote}"\n`);