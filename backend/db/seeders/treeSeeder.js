const Tree = require("../../models/Tree");
const getData = require("../../../data/getter");

const toSeedTrees = async () => {
  try {
    const trees = getData("../data/trees.json");

    await Tree.bulkCreate(trees);
    console.log("Alberi creati con successo!");
  } catch (error) {
    console.log(
      "Errore durante l'inserimento degli alberi:",
      error.message,
      error.stack
    );
  }
};

module.exports = toSeedTrees;
