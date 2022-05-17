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

app.get('/tip/:total/:tipPercentage', (req, res)=>{
    let tipTotal = (req.params.tipPercentage/100)*req.params.total;
    res.send("Total: "+tipTotal);
})

app.get('/magic/:name', (req, res)=>{
    let answerArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
    let answer = answerArray[Math.floor(Math.random() * answerArray.length)];
    if(req.params.name){
        let newName = req.params.name.replace('%20', ' ')
        res.send("<h1>"+newName+"</h1>"+"\n"+"<h1>"+answer+"</h1>")
    }
})


app.listen(PORT);
