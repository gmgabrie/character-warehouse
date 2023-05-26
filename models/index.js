const User = require("./User");
const Characters = require("./Characters");

User.hasMany(Characters, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Characters.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Characters };
