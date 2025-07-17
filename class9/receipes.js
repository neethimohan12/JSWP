const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let recipes = [
  { id: 1, name: "Pasta", ingredients: ["noodles", "sauce"], steps: "Boil and mix." },
  { id: 2, name: "Salad", ingredients: ["lettuce", "tomato"], steps: "Chop and toss." }
];

app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

app.post('/api/recipes', (req, res) => {
  const { name, ingredients, steps } = req.body;

  if (!name || !ingredients || !steps) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const newRecipe = {
    id: recipes.length + 1,
    name,
    ingredients,
    steps
  };

  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

app.listen(PORT, () => {
  console.log(`Recipe Book API is running at http://localhost:${PORT}`);
});