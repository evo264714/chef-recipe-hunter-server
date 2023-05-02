const express = require('express');
const app = express();
const port = process.env.PORT || 2000;

app.get('/', (req, res) =>{
    res.send('Chef is running')
});

app.listen(port, () =>{
    console.log(`chef is running on port: ${port}`);
})