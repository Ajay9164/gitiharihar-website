const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

// Load trades.json
const tradesPath = path.join(__dirname, "../data/trades.json");
let trades = [];

try {
  const data = fs.readFileSync(tradesPath, "utf-8");
  trades = JSON.parse(data);
} catch (err) {
  console.error("Error reading trades.json:", err);
}

// @route GET /api/trades
router.get("/", (req, res) => {
  console.log("Sending trades:", trades); // 👀 Debug
  res.json(trades);
});

module.exports = router;
