const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//middleware
// app.use('/posts', ()=>{
//     console.log('middleware');
// })

//import routes
const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);

//routes
app.get('/', (req,res)=>{
    res.send('We are on home');
});

app.get('/posts', (req,res)=>{
    res.send('We are on posts');
});

//hardcode database
mongoose.connect(
process.env.DB_CONNECTION, 
{useNewUrlParser: true},
()=>{console.log('connected to DB');});

app.listen(3000);