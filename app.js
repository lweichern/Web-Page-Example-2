const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/men-fashion', (req, res) => {
    res.render('men-fashion');
});

app.listen('3100');
console.log('listening to port 3100');