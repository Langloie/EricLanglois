// Require express in order to build an express application
const express = require("express");

// IMPORT ROUTER
const learnerRouter = require("./routes/learnRoute");

// Create a variable to store our express methods
const app = express();



app.use(express.json());
// Create middleware to handle our routes


app.use("/api/v1/learners", learnerRouter);

//create a way to handle errors
app.all("*", (request, response, next)=>{
    //create  error
    // const routeError = new Error(`oops... cannot find ${request.originalUrl} on our servers`)

    // //assign a status code
    // routeError.statusCode = 404;

    // //assign a status
    // routeError.status = "fail";

    //send response
    // response.status(routeError.statusCode).json({
    //     status: routeError.status,
    //     message: routeError.message,
    // });
    const routeError = new Error();

    next(routeError);
});

// //create middleware to bounce back the error
// const globalErrorHandlingFunction = (error, request, response, next)=>{
//     //retrieve the error status code
//     error.statusCode = error.statusCode || 500;
//     error.status = error.status || "error";
//     error.message = error.message || "Something went wrong..";
    
//     //send a response
//     response.status(error.statusCode).json({
//         status: error.status,
//         message: error.message,
//     });
//     next();
// };

//create global error handling function
// app.use(globalErrorHandler)

module.exports = app;