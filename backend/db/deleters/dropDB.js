const sequelize = require("../connection");

const resetDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log(
      "Tutte le tabelle sono state svuotate e ricreate con successo!"
    );
  } catch (error) {
    console.error("Errore nel svuotare il database:", error);
  } finally {
    await sequelize.close(); // Chiudi la connessione dopo l'operazione
  }
};

resetDatabase();
