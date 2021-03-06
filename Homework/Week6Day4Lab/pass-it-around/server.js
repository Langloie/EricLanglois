const express = require('express');
const app = express();

const PORT = 4000;



app.get('/', (req, res)=>{
    res.send("99 Bottles of beer on the wall <a href= 'localhost:4000/98'> take one down, pass it around</a>");
})


app.get('/:number_of_bottles', (req, res)=>{
    if(req.params.number_of_bottles>0){
        res.send(req.params.number_of_bottles+` Bottles of beer on the wall <a href='localhost:4000/${req.params.number_of_bottles-1}'>take one down, pass it around</a>`);
    }else{
        res.send(req.params.number_of_bottles+" Bottles of beer on the wall");
    }
});


app.listen(PORT);

