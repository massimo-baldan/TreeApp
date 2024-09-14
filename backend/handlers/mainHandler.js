const path = require("path"); //importa il modulo per risolvere il path

// Handler per la rotta principale
function mainRoute(req, res) {
  res.sendFile(path.join(__dirname, "../../frontend/public", "index.html"));
}

module.exports = {
  mainRoute,
};
