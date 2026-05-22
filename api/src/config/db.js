require('dotenv').config();

const mongoose = require('mongoose');
const seedPokemon = require("../seeders/pokemonSeeder.js"); 

mongoose.connect(process.env.MONGO_URL)
.then(async () => {
  console.log("✅ Connecté à MongoDB");

  await seedPokemon();

})
.catch(err => console.error("❌ Erreur MongoDB :", err));

module.exports = mongoose;