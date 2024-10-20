// seeders/userSeeder.js
const User = require("../../models/User"); // Importa il modello User

const toSeedUsers = async () => {
  try {
    const users = [
      { name: "Alice", isSub: true },
      { name: "Bob", isSub: false },
      { name: "Charlie", isSub: true },
      { name: "David", isSub: false },
      { name: "Eve", isSub: true },
      { name: "Frank", isSub: false },
      { name: "Grace", isSub: true },
      { name: "Hank", isSub: false },
      { name: "Ivy", isSub: true },
      { name: "Jack", isSub: false },
      { name: "Kara", isSub: true },
      { name: "Leo", isSub: false },
      { name: "Mia", isSub: true },
      { name: "Nina", isSub: false },
      { name: "Oscar", isSub: true },
      { name: "Paul", isSub: false },
      { name: "Quinn", isSub: true },
      { name: "Rita", isSub: false },
      { name: "Steve", isSub: true },
      { name: "Tina", isSub: false },
      { name: "Uma", isSub: true },
      { name: "Vince", isSub: false },
      { name: "Wendy", isSub: true },
      { name: "Xander", isSub: false },
      { name: "Yara", isSub: true },
      { name: "Zane", isSub: false },
      { name: "Bella", isSub: true },
      { name: "Chris", isSub: false },
      { name: "Diana", isSub: true },
      { name: "Ethan", isSub: false },
      { name: "Fiona", isSub: true },
      { name: "George", isSub: false },
      { name: "Holly", isSub: true },
      { name: "Ivan", isSub: false },
      { name: "Julia", isSub: true },
      { name: "Kyle", isSub: false },
      { name: "Lana", isSub: true },
      { name: "Mike", isSub: false },
      { name: "Nora", isSub: true },
      { name: "Owen", isSub: false },
      { name: "Penny", isSub: true },
      { name: "Quincy", isSub: false },
      { name: "Ruby", isSub: true },
      { name: "Sam", isSub: false },
      { name: "Tara", isSub: true },
      { name: "Ugo", isSub: false },
      { name: "Vera", isSub: true },
      { name: "Will", isSub: false },
      { name: "Xena", isSub: true },
    ];

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
