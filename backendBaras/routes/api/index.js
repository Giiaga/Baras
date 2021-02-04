const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { setTokenCookie } = require("../../utils/auth.js");
const { restoreUser } = require("../../utils/auth.js");
const { requireAuth } = require("../../utils/auth.js");
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");

const { User } = require("../../db/models");

// Routes connect
router.use("/session", sessionRouter);
router.use("/users", usersRouter);

router.get("/", (req, res) => {
  res.send("hiiihdsf");
});

module.exports = router;
