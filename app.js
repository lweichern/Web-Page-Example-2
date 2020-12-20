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

let port = Number(process.env.PORT || 3000);

app.listen(port);
// console.log('listening to port 3100');