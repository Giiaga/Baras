const express = require("express");
const router = express.Router();
const apiRouter = require("./api");
const { requireAuth, setTokenCookie, restoreUser } = require("../utils/auth");
// const { User } = require("../db/models/user");
const { Baras } = require("../db/models");

router.use("/api", apiRouter);

// Static routes
// Serve React build files in production
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  // Serve the frontend's index.html file at the root route
  router.get("/", (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, "../../frontend", "build", "index.html")
    );
  });

  // Serve the static assets in the frontend's build folder
  router.use(express.static(path.resolve("../frontend/build")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, "../../frontend", "build", "index.html")
    );
  });
}

// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== "production") {
  router.get("/api/csrf/restore", (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    return res.json({});
  });
}
router.get("/", async (req, res) => {
  // let userr = await User.findByPk(15);
  // console.log(userr);
  res.json("hisdgfg");
});

router.post("/createBaras", requireAuth, async (req, res, next) => {
  // restoreUser(req, res, next);
  let { relatesTo, mainText, photo, audioLink, videoLink, userId } = req.body;
  let newBaras = await Baras.create({
    userId,
    relatesTo,
    text: mainText,
    photo,
    music: audioLink,
    video: videoLink,
  });
  // console.log(newBaras);
  return res.json(newBaras);
});
module.exports = router;
