const express = require("express"); //importa il modulo per express
const router = express.Router(); //inizializza un router di express
const { fetchUsers } = require("../handlers/usersHandler.js"); // chiama la funzione che prende gli utenti

//specifica quale funzione chiamare in base alla rotta
//router.get("/", mainRoute); //main route
router.get("/fetchUsers", fetchUsers);

module.exports = router;
