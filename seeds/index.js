const sequelize = require("../config/connection");
const seedCharacters = require("./charactersData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCharacters();

  process.exit(0);
};

seedAll();
