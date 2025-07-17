const express = require('express');
const router = express.Router();
// All book routes
router.get('/', (req, res) => {
 res.json({ books: ['Book 1', 'Book 2'] });
});
router.get('/:id', (req, res) => {
 res.json({ bookId: req.params.id });
});
router.post('/', (req, res) => {
 res.json({ created: req.body });
});
module.exports = router;