
// npm init -y
// npm i express nodemon dotenv
// created 3 files {models -views-controllers} 
// npm install express-react-views react@16 react-dom@16 --save



const express = require('express');
const mongoose = require('mongoose');
const app = express()
require('dotenv').config()
// -------Links env


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.set('view engine', 'jsx');
// ---->needs 2 b viewAble

app.engine('jsx', require('express-react-views').createEngine());


app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));

// --------------------------{RequireStmnts}



const fruitData = require('./models/fruits')

const Fruit = require('./models/fruits.js');

// app.get('/fruits', (req, res) => {
//     res.render('Index', {data: fruitData})
// });

// app.get('/fruits', (req, res)=>{
//     res.render('Index');
// });

app.get('/fruits', (req, res)=>{
    Fruit.find({}, (error, allFruits)=>{
        res.render('Index', {
            fruits: allFruits
        });
    });
});




//put this above your Show route
app.get('/fruits/new', (req, res) => {
    res.render('New');
});

// //add show route
// app.get('/fruits/:indexOfFruitsArray', (req, res) => {
//     res.render('Show', {fruits: fruitData[req.params.indexOfFruitsArray]}  );
// });
// app.get('/fruits/:id', (req, res)=>{
//     Fruit.findById(req.params.id, (err, foundFruit)=>{
//         res.send(foundFruit);
//     });
// });
app.get('/fruits/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.render('Show', {
            fruit:foundFruit
        });
    });
});

// Post REQUEST
app.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit)=>{
        res.redirect('/fruits');
    });
});



app.listen(3000, ()=>{
    console.log(`Currently Listening on PORT ${process.env.PORT}`)
})

