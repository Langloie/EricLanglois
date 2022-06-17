const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('../models/pokemon');

app.set('view engine', 'jsx');
// // ---->needs 2 b viewAble

app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon', (req, res)=>{
    res.render("Index", pokemon);
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});