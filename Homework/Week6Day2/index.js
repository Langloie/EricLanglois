//require statement

const fs = require('fs');


//write file takes three parameters
//
fs.writeFile('./nameOfFile.txt', 'Whatever_string', err => {
    if (err) {
      console.error(err);
    }
    else{
        console.log('successful writeFile')
    }
    });

person = 'jordan';
