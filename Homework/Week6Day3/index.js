//require express
const express = require("express");
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger')
const members = require('./members')


//initialize server
const app = express();


//init middleware
// app.use(logger);

//handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


const PORT = process.env.PORT || 3000;

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//homepage route
app.get('/',(req, res)=> res.render('index', {
    title: "member app",
    members
}));

//set static folder
app.use(express.static(path.join(__dirname, 'public')));


//members api routes
app.use('/api/members', require('./routes/api/members'));




// app.set('view engine', 'ejs');


// <%= index %>



//uses library to establish route directly on app
app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
  });

newArr = ['banana', 'pear', 'plum', 'peach'];

app.get('/1', function (req, res) {
res.send(newArr);
});



const newObj2 = {
    "1": 1,
    "2": 2,
    "3": 3
}

app.get('/2', function (req, res) {
res.send(newObj);
});

app.get('/3', function (req, res) {
res.send(newObj2);
});

app.get('/4', function (req, res) {
res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//download files to local computer
// res.download('./package-lock.json');


// res.json({
//     username: "AdminPsuedo",
//     failedLogin: false
// })


//render template
//view engine
// res.render('index')

// res.render('about')
//make server run
//listen is a method of express to put in port number
app.listen(PORT);