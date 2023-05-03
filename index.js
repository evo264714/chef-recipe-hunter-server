const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const cors = require('cors');

const chefs = require('./data/chefs.json')
const recipes = require('./data/recipes.json')

app.use(cors())

app.get('/', (req, res) =>{
    res.send('Chef is running')
});

app.get('/chefs', (req, res) =>{
    res.send(chefs)
})
app.get('/recipes/:id', (req, res)=>{
    const id = req.params.id;
    const selectedRecipes = recipes.find(recipe => recipe.chef_id === parseInt(id))
    res.send(selectedRecipes);
})

app.listen(port, () =>{
    console.log(`chef is running on port: ${port}`);
})