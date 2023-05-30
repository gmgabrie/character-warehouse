const { Characters } = require("../models");

const charactersData = [
  {
    Name: "Batman",
    Race: "Caucasion",
    Age: 30,
    Height: 72,
    Weight: 185,
    Gender: "Male",
    Story: "Story of Batman goes here.",
  },
  {
    Name: "Robin",
    Race: "Caucasion",
    Age: 30,
    Height: 72,
    Weight: 185,
    Gender: "Male",
    Story: "Story of Robin goes here.",
  },
];

const seedCharacters = () => Characters.bulkCreate(charactersData);

module.exports = seedCharacters;
