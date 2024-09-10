require("dotenv").config(); // carico le variabili d'ambiente dal file .env
const express = require("express");
const http = require("http"); // import del modulo http

const app = express(); //creo l'app
const port = process.env.PORT;

// Crea il server http
const server = http.createServer(app);

// Fai partire il server sulla porta definita
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
