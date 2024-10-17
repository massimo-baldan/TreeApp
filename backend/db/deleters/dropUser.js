const sequelize = require("../connection"); // Assicurati che il percorso sia corretto
const User = require("../../models/User"); // Controlla che il percorso sia corretto

const clearUsers = async () => {
  try {
    // Se la tabella non esiste, questo potrebbe dare errore.
    const count = await User.count();
    if (count > 0) {
      await User.destroy({ where: {}, truncate: true });
      console.log("Tabella utente svuotata con successo!");
    } else {
      console.log("La tabella utente è già vuota.");
    }
  } catch (error) {
    console.error("Errore nello svuotare la tabella utente:", error);
  } finally {
    await sequelize.close(); // Chiudi la connessione dopo l'operazione
  }
};

clearUsers();
