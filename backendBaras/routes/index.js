const express = require("express");
const router = express.Router();
const apiRouter = require("./api");
const { requireAuth } = require("../utils/auth");
router.use("/api", apiRouter);

router.get("/", (req, res) => {
  res.send("hi");
});
module.exports = router;
