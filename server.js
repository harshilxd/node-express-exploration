const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('Here');
    //res.send('Hi');
    //res.download('server.js');
    //res.json({name: 'Harshil', age: 20});
    res.render('index.ejs', {name: 'Harshil'});
})

app.listen(3000);