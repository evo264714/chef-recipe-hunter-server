const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const cors = require('cors');

const chefs = require('./data/chefs.json')

app.use(cors())

app.get('/', (req, res) =>{
    res.send('Chef is running')
});

app.get('/chefs', (req, res) =>{
    res.send(chefs)
})

app.listen(port, () =>{
    console.log(`chef is running on port: ${port}`);
})