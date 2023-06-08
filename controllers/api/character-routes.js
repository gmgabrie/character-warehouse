const router = require("express").Router();
const { Characters } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newCharacter = await Characters.create({
      ...req.body,
      user_id: req.session.userId,
      // username: req.session.username,
    });

    res.status(200).json(newCharacter);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const characterData = await Characters.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.userId,
      },
    });

    if (!characterData) {
      res.status(404).json({ message: "No character found with this id!" });
      return;
    }

    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
