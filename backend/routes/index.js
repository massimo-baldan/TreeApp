const express = require("express"); //importa il modulo per express
const router = express.Router(); //inizializza un router di express
const { mainRoute } = require("../handlers/mainHandler.js"); //chiama la funzione che fornisce la rotta

//specifica quale funzione chiamare in base alla rotta
router.get("/", mainRoute); //main route

module.exports = router;
