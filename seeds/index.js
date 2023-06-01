const sequelize = require("../config/connection");

const { User, Characters } = require("../models");
const seedUsers = require("./userData");

const seedCharacters = require("./charactersData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedCharacters();

  process.exit(0);
};

seedAll();
