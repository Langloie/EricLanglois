const express = require('express');
const app = express();

const PORT = 4000;



app.get('/', (req, res)=>{
    res.send("99 Bottles of beer on the wall <a href= 'localhost:4000/98'> take one down, pass it around</a>");
})

//add show route
app.get('/:number_of_bottles', (req, res)=>{
    res.send(req.params.number_of_bottles-1,"Bottles of beer on the wall <a href='localhost:4000/:number_of_bottles'>take one down, pass it around</a>");
});


app.listen(PORT);