const express = require('express');

const app = express();

const allChefs = require("./chefs.json");

app.get('/', (req, res) =>{
    res.json({message:"Hello server is running"});
});

app.get('/allchefs', (req, res) =>{
    res.send(allChefs)
})

app.listen(2000, () =>{
    console.log('server is running on port 2000');
});