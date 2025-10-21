const express = require("express");
const router = express.Router();
const faculties = require("../data/faculties.json");

router.get("/", (req, res) => {
  res.json(faculties);
});

module.exports = router;
