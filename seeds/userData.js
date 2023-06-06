const { User } = require("../models");

const userData = [
  {
    username: "gmgabrie",
    email: "ggabriel420@gmail.com",
    password: "password",
  },
  {
    username: "testuser",
    email: "testuser@test.com",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
