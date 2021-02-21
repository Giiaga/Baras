const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../utils/auth.js");

const { Baras, User, Story, Page, Trust, Notifying } = require("../db/models");

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
    // console.log(currentUser, "dffjsdk");
    let { username } = req.params;
    if (currentUser != username) return res.redirect("/");

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
  requireAuth,
  asyncHandler(async (req, res) => {
    let {
      userId,
      title,
      publish,
      worldShare,
      trustShare,
      selfShare,
    } = req.body;
    // console.log(publish, worldShare, trustShare, selfShare, "CHECKKKKKK");
    // let storyFound = await Story.findOne({
    //   where: { userId: userId, title: title },
    // });
    if (selfShare && trustShare) {
      let storyUpdate = await Story.update(
        { published: true, private: true, trusted: true },
        {
          returning: true,
          plain: true,
          where: {
            title: title,
            userId: userId,
          },
        }
      );
      return res.json(storyUpdate);
    } else if (worldShare && trustShare) {
      let storyUpdate = await Story.update(
        { published: true, private: false, trusted: true },
        {
          returning: true,
          plain: true,
          where: {
            title: title,
            userId: userId,
          },
        }
      );
      return res.json(storyUpdate);
    } else if (worldShare || trustShare) {
      let storyUpdate = await Story.update(
        { published: true, private: false, trusted: true },
        {
          returning: true,
          plain: true,
          where: {
            title: title,
            userId: userId,
          },
        }
      );
      return res.json(storyUpdate);
    } else if (selfShare) {
      let storyUpdate = await Story.update(
        { published: true, private: true, trusted: false },
        {
          returning: true,
          plain: true,
          where: {
            title: title,
            userId: userId,
          },
        }
      );
      return res.json(storyUpdate);
    }
    let story = await Story.create({ userId, title, publish });
    await Page.create({ pageNumber: 1, storyId: story.id });

    return res.json(story);
  })
);

// STORY PAGE
router.get("/story/:title/cont/:userId", requireAuth, async (req, res) => {
  let { title, userId } = req.params;
  let titleToSearch = title.split("<:>").join(" ");
  let storyFound = await Story.findOne({
    where: { title: titleToSearch, userId: userId },
  });
  if (storyFound == null || storyFound == undefined)
    return res.json({ error: "Story not found" });
  let pages = await Page.findAll({
    where: { storyId: storyFound.id },
    order: [["pageNumber", "ASC"]],
  });
  return res.json(pages);
});

router.post(
  "/story/:title/cont/newPage",
  requireAuth,
  asyncHandler(async (req, res) => {
    let {
      userId,
      textMeasures,
      photoMeasures,
      audioMeasures,
      chapterMeasures,
      videoMeasures,
      title,
      photo,
      video,
      audio,
      chapter,
      text,
      pageNumber,
    } = req.body;

    let story = await Story.findOne({
      where: {
        userId: userId,
        title: title,
      },
    });

    let page = await Page.update(
      {
        pageNumber,
        chapter,
        storyId: story.id,
        text,
        photo,
        music: audio,
        video,
        chapterWidth: chapterMeasures.width,
        chapterHeight: chapterMeasures.height,
        chapterH: chapterMeasures.chapterH,
        chapterV: chapterMeasures.chapterV,
        textWidth: textMeasures.width,
        textHeight: textMeasures.height,
        textH: textMeasures.textH,
        textV: textMeasures.textV,
        photoWidth: photoMeasures.width,
        photoHeight: photoMeasures.height,
        photoH: photoMeasures.photoH,
        photoV: photoMeasures.photoV,
        musicWidth: audioMeasures.width,
        musicHeight: audioMeasures.height,
        musicH: audioMeasures.musicH,
        musicV: audioMeasures.musicV,
        videoWidth: videoMeasures.width,
        videoHeight: videoMeasures.height,
        videoH: videoMeasures.videoH,
        videoV: videoMeasures.videoV,
      },
      {
        where: { storyId: story.id, pageNumber: pageNumber },
        returning: true,
        plain: true,
      }
    );

    let lastPage = await Page.findOne({
      where: { storyId: story.id },
      order: [["pageNumber", "DESC"]],
    });
    let newPage = await Page.create({
      storyId: story.id,
      pageNumber: lastPage.pageNumber + 1,
      chapter,
    });

    return res.json({ pageUpdated: page[1], newPage: newPage });
  })
);
router.put(
  "/story/:title/cont",
  requireAuth,
  asyncHandler(async (req, res) => {
    let {
      userId,
      textMeasures,
      photoMeasures,
      audioMeasures,
      chapterMeasures,
      videoMeasures,
      title,
      photo,
      video,
      audio,
      chapter,
      text,
      pageNumber,
    } = req.body;
    //search story id
    let story = await Story.findOne({
      where: {
        userId: userId,
        title: title,
      },
    });
    // if (!story) return res.redirect("/");
    let page = await Page.update(
      {
        pageNumber,
        chapter,
        storyId: story.id,
        text,
        photo,
        music: audio,
        video,
        chapterWidth: chapterMeasures.width,
        chapterHeight: chapterMeasures.height,
        chapterH: chapterMeasures.chapterH,
        chapterV: chapterMeasures.chapterV,
        textWidth: textMeasures.width,
        textHeight: textMeasures.height,
        textH: textMeasures.textH,
        textV: textMeasures.textV,
        photoWidth: photoMeasures.width,
        photoHeight: photoMeasures.height,
        photoH: photoMeasures.photoH,
        photoV: photoMeasures.photoV,
        musicWidth: audioMeasures.width,
        musicHeight: audioMeasures.height,
        musicH: audioMeasures.musicH,
        musicV: audioMeasures.musicV,
        videoWidth: videoMeasures.width,
        videoHeight: videoMeasures.height,
        videoH: videoMeasures.videoH,
        videoV: videoMeasures.videoV,
      },
      {
        returning: true,
        plain: true,
        where: { storyId: story.id, pageNumber: pageNumber },
      }
    );

    return res.json(page[1]);
  })
);

// TRUST ROUTES

router.get(
  "/trust/all/:userId",
  requireAuth,
  asyncHandler(async (req, res) => {
    let { userId } = req.params;
    let allTrust = [];
    let Trusts = await Trust.findAll({
      where: { userId },
    });
    for (let i = 0; i < Trusts.length; i++) {
      let trusted = await User.findOne({ where: { id: Trusts[i].trustedId } });
      allTrust.push({ Trust: Trusts[i], trusted });
    }
    return res.json(allTrust);
  })
);
router.post(
  "/add/trust",
  requireAuth,
  asyncHandler(async (req, res) => {
    let { userId, trustedId } = req.body;

    let addTrust = await Trust.create({ userId: userId, trustedId: trustedId });
    await Trust.create({
      userId: trustedId,
      trustedId: userId,
    });
    await Notifying.destroy({
      where: {
        userId,
        trustedId,
        type: "trustRequest",
      },
    });
    return res.json(addTrust);
  })
);

router.delete(
  "/remove/trust",
  requireAuth,
  asyncHandler(async (req, res) => {
    let { userId, trustedId } = req.body;
    await Trust.destroy({ where: { userId: userId, trustedId } });
    await Trust.destroy({ where: { userId: trustedId, trustedId: userId } });

    return res.json({ message: "Done" });
  })
);
// NOTIFICATIONS

router.get(
  "/notifications/:userId",
  requireAuth,
  asyncHandler(async (req, res) => {
    let { userId } = req.params;
    let user = req.user;
    let allNotifications = [];
    let tempNotification;

    if (userId == user.id) {
      tempNotification = await Notifying.findAll({
        where: { userId: userId },
      });

      for (let i = 0; i < tempNotification.length; i++) {
        let sentUser = await User.findOne({
          where: { id: tempNotification[i].trustedId },
        });

        allNotifications.push({
          sentUser: sentUser,
          notification: tempNotification[i],
        });
      }

      return res.json(allNotifications);
    }
  })
);

router.post(
  "/notification/remove",
  requireAuth,
  asyncHandler(async (req, res) => {
    let { userId, trustedId } = req.body;
    await Notifying.destroy({
      where: {
        userId: userId,
        trustedId: trustedId,
        type: "trustRequest",
      },
    });

    return res.json({ message: "Successful" });
  })
);
module.exports = router;
