const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../utils/auth.js");

const { Baras, User } = require("../db/models");

router.post(
  "/createBaras",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    let {
      relatesTo,
      mainText,
      photo,
      audioLink,
      videoLink,
      userId,
      privateBaras,
      trusted,
    } = req.body;
    let newBaras = await Baras.create({
      userId,
      relatesTo,
      text: mainText,
      photo,
      music: audioLink,
      video: videoLink,
      private: privateBaras,
      trusted,
    });

    return res.json(newBaras);
  })
);

//USER PROFILE
router.get(
  "/:username",
  requireAuth,
  asyncHandler(async (req, res) => {
    let { username: currentUser } = req.user;
    console.log(currentUser, "dffjsdk");
    let { username } = req.params;
    if (currentUser != username) res.redirect("/");

    let user = await User.findOne({ where: { username: username } });
    return res.json(user);
  })
);

router.get(
  "/getBaras/:userId",
  requireAuth,
  asyncHandler(async (req, res) => {
    let { userId } = req.params;
    let allBaras = await Baras.findAll({ where: { userId: userId } });

    return res.json(allBaras);
  })
);
module.exports = router;
