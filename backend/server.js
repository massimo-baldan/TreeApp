require("dotenv").config(); // carico le variabili d'ambiente dal file .env
const cors = require("cors");
const express = require("express");
const http = require("http"); // import del modulo http
const path = require("path");
const routes = require("./routes/index");
const sequelize = require("./db/connection");
const seedUsers = require("./db/seeders/userSeeder"); // Importa il seeder

const app = express(); //creo l'app
const port = process.env.PORT;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend/public")));
app.use(cors());

app.use("/", routes);

// Sincronizzazione con il database
sequelize
  .sync({ force: process.env.NODE_ENV !== "production" })
  .then(async () => {
    console.log("Database connesso e sincronizzato!");
    if (process.env.NODE_ENV !== "production") {
      await seedUsers();
    }
  })
  .catch((err) => {
    console.error("Errore di connessione al database:", err);
  });

// Crea il server http
const server = http.createServer(app);

// Fai partire il server sulla porta definita
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
