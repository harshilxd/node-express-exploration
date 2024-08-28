const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
    res.send('User Display');
})

router.get('/add', (req, res) =>{
    res.send('User Add');
});

module.exports = router;