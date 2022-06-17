//import mongoose to connect to db
const mongoose = require('mongoose');

//import dotenv
const dotenv = require('dotenv');

//use dotenv to connect config file
dotenv.config({
    path: "./config.env"
});

console.log(process.env)


// IMPORT OUR EXPRESS APPLICATION
const app = require("./Mongoapp");

//variable to represent database
//if deprication error, add 
const perscholasDB = mongoose.connect(process.env.DATABASE.replace("<password>",process.env.PASSWORD)).then(()=>{
    console.log("Databse is now up and running");
});

// Create a variable that represent our port number
const port = 3000;

// Listen to the request/response cycle
app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});