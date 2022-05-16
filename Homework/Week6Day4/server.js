const express = require('express');
const app = express();
const fruits = require("./models/fruits");
const PORT = 3000;
//---------------------------------------------




app.get('/fruits', (req, res)=>{
    console.log(fruits);
    res.send(fruits);
})


//add show route
app.get('/fruits/:indexOfFruitsArray', (req, res)=>{
    res.send(fruits[req.params.indexOfFruitsArray]);
});



//---------------------------------------------
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})