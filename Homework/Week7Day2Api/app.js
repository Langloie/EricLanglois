const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/v1/learners', (req,res)=>{
    res.status(500).json({
        status: "fail",
        data:{
            message: "undefined routes"
        }
    })
})

app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`);
});