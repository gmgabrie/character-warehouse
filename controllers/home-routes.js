const router = require("express").Router();
const { Characters, User } = require("../models");
const withAuth = require("../utils/auth");

// GET all characters for homepage
router.get("/", async (req, res) => {
  try {
    const dbCharacterData = await Characters.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const characters = dbCharacterData.map((characters) =>
      characters.get({ plain: true })
    );
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render("homepage", {
      characters,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // Profile route
// router.get("/profile", (req, res) => {
//   // If the user is already logged in, redirect to the homepage
//   if (req.session.loggedIn) {
//     res.render("profile", {
//       user_id: req.session.userId,
//       username: req.session.username,
//       loggedIn: req.session.loggedIn,
//     });
//     return;
//   }
//   // Otherwise, render the 'login' template
//   res.render("login");
// });

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.userId, {
      attributes: { exclude: ["password"] },
      include: [{ model: Characters }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login route
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect("/profile");
    return;
  }
  // Otherwise, render the 'login' template
  res.render("login");
});

module.exports = router;
