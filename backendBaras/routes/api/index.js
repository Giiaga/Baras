const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { setTokenCookie } = require("../../utils/auth.js");
const { restoreUser } = require("../../utils/auth.js");
const { requireAuth } = require("../../utils/auth.js");

const { User } = require("../../db/models");
router.get("/", (req, res) => {
  res.send("hiiihdsf");
});

module.exports = router;
