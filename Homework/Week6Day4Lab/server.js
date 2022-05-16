const express = require('express');
const greeting = require('./name')
const app = express();

const PORT = 5000;



app.get('/greeting', (req, res)=>{
    console.log("Hello, stranger");
    console.log(greeting);
    // res.send(greeting);
    res.send("Hello, stranger");
})

//add show route
app.get('/greeting/:name', (req, res)=>{
    console.log(req.params.name);
    res.send("Hello,"+req.params.name);
});


app.listen(PORT);
