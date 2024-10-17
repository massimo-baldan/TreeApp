const User = require("../models/User"); // Assicurati di importare correttamente il tuo modello User

// GET /api/users - Fetch all users
async function fetchUsers(req, res) {
  try {
    // Fetch tutti gli utenti dal database usando Sequelize
    const users = await User.findAll();

    // Invia gli utenti come risposta JSON
    res.status(200).json(users);
  } catch (error) {
    console.error("Errore nel fetch degli utenti:", error);
    res.status(500).json({ message: "Errore del server" });
  }
}

module.exports = { fetchUsers };
