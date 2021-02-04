const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { setTokenCookie } = require("../../utils/auth.js");
const { User } = require("../../db/models");
router.get("/", (req, res) => {
  res.send("hiiihdsf");
});
router.get(
  "/set-token-cookie",
  asyncHandler(async (req, res) => {
    const user = await User.findOne({
      where: {
        username: "demoUser1",
      },
    });

    setTokenCookie(res, user);
    return res.json({ user });
  })
);

module.exports = router;
