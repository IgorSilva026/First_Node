const express = require('express');

const app = express()

app.get('/teste', (req, res)=>{
    res.send("Minha primeira API")
})

app.listen(3333,()=>{
    console.log("Server ON !!!!")
})