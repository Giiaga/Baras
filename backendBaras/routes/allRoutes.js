const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../utils/auth.js");

const { Baras, User, Story, Page } = require("../db/models");

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

// CREATE STORY
router.post(
  "/story/tell",
  asyncHandler(async (req, res) => {
    let { userId, title, publish } = req.body;
    let story = await Story.create({ userId, title, publish });
    await Page.create({ pageNumber: 1, storyId: story.id });
    return res.json(story);
  })
);

// CREATE STORY PAGE
router.post(
  "/story/cont",
  asyncHandler(async (req, res) => {
    let {
      pageNumber,
      chapter,
      storyId,
      text,
      image,
      music,
      video,
      chapterWidth,
      chapterHeight,
      chapterH,
      chapterV,
      textWidth,
      textHeight,
      textH,
      textV,
      imageWidth,
      imageHeight,
      imageH,
      imageV,
      musicWidth,
      musicHeight,
      musicH,
      musicV,
      videoWidth,
      videoHeight,
      videoH,
      videoV,
    } = req.body;

    let page = await Page.create({
      pageNumber,
      chapter,
      storyId,
      text,
      image,
      music,
      video,
      chapterWidth,
      chapterHeight,
      chapterH,
      chapterV,
      textWidth,
      textHeight,
      textH,
      textV,
      imageWidth,
      imageHeight,
      imageH,
      imageV,
      musicWidth,
      musicHeight,
      musicH,
      musicV,
      videoWidth,
      videoHeight,
      videoH,
      videoV,
    });

    return res.json(page);
  })
);
module.exports = router;
