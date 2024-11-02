// seeders/userSeeder.js
const User = require("../../models/User"); // Importa il modello User
const getData = require("../../../data/getter");

const toSeedUsers = async () => {
  try {
    const users = getData("../data/users.json");

    await User.bulkCreate(users);
    console.log("Utenti inseriti con successo!");
  } catch (error) {
    console.error(
      "Errore durante l'inserimento degli utenti:",
      error.message,
      error.stack
    );
  }
};

module.exports = toSeedUsers;
