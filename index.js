const express = require('express')
const app = express();
const pokeData = require("./pokemon.json").pokemon;

const PORT = 3000;

// How do we enable JSON parsing of incoming requests into req.body?

app.get('/', (req, res) => {
  res.send(pokeData)
})

app.get('/api/allNames', (_, res) => {
  const pokeNames = pokeData.map(pokemon => pokemon.name);
  res.send(pokeNames);
})

app.get('/api/:name', (req, res) => {
  const pokemonName = req.params.name;
  res.send(pokemonName);
})

app.post('/api/post', (req, res) => {
  const newPokemon = req.body;
  pokeData.push(newPokemon);
  res.send(pokeData);
})

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
})