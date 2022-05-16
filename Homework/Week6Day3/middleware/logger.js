//call next last to move to next middleware function
const logger = (req, res, next=>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
    next();
});

module.exports = logger;