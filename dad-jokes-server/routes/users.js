const express = require('express');

// Create the Router instance.
const router = express.Router();

// Define routes.
router.get('/', (req, res) => {
    res.send('Hello from Express!');
});



module.exports = router;