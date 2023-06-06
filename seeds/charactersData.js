const { Characters } = require("../models");

const charactersData = [
  {
    Name: "Batman",
    Race: "Caucasion",
    Age: 37,
    Height: 72,
    Weight: 185,
    Gender: "Male",
    Story: "Story of Batman goes here.",
    User_id: 1,
  },
  {
    Name: "Robin",
    Race: "Caucasion",
    Age: 30,
    Height: "72cm",
    Weight: "185 lbs",
    Gender: "Male",
    Story: "Story of Robin goes here.",
    User_id: 1,
  },
  {
    Name: "JK",
    Race: "Human",
    Age: 900,
    Height: "6'4",
    Weight: "200 lbs",
    Gender: "Male",
    Story: "He's cool",
    User_id: 1,
  },
];

const seedCharacters = () => Characters.bulkCreate(charactersData);

module.exports = seedCharacters;
