const express = require('express');
const app = express();
// Enable JSON support
app.use(express.json());
// Log every request
app.use((req, res, next) => {
 console.log(`Someone visited: ${req.url}`);
 next(); // Continue to route
});
// Serve static files (CSS, images)
app.use(express.static('public'));
// Now we can receive JSON data!
app.post('/api/message', (req, res) => {
 const message = req.body.text;
 console.log('Received:', message);
 res.json({ received: message });
});
app.listen(3006);