const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/name', (req, res) => {
    console.log('Here');
    //res.send('Hi');
    //res.download('server.js');
    // res.json({name: 'Harshil', age: 20});
    res.render('index.ejs', {name: 'Harshil'});
})

const userRouter = require('./routes/users');

app.use('/users', userRouter);

app.listen(3000);