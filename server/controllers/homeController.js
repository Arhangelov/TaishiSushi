const router = require("express").Router();
const isAuth = require("../midlewarse/isAuth");
const {getNewest} = require('../services/sushiService');

router.get("/", (req, res) => {
  getNewest()
    .then((sushi) => {
      res.status(200).json(sushi);
    })
    .catch(() => res.json({ message: "Something went wrong." }));
});

router.get("/secret-action", isAuth, (req, res) => {
  res.send("very verysecret");
});

module.exports = router;
