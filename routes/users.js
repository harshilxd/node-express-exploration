const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
    res.send('User Display');
})

router.get('/add', (req, res) =>{
    res.send('User Add');
});

router.post('/', (req, res) =>{
    res.send('User Added');
});

router.route('/:id')
    .get((req, res) => {
        console.log(req.user);
        res.send(`User ${req.params.id} Display`);
    })
    .put((req, res) => {
        res.send(`User ${req.params.id} Put`);
    })
    .delete((req, res) => {
        res.send(`User ${req.params.id} Deleted`);
    });

    users = [
        {name: 'Harshil'},
        {name: 'Raj'},
        {name: 'Ravi'}
    ]
router.param('id', (req, res, next, id) =>{
    req.user = users[id];
    next();
})

// router.get('/:id', (req, res) => {
//     res.send(`User ${req.params.id} Display`);
// })

// router.put('/:id', (req, res) => {
//     res.send(`User ${req.params.id} Put`);
// })

// router.delete('/:id', (req, res) => {
//     res.send(`User ${req.params.id} Deleted`);
// })


module.exports = router;