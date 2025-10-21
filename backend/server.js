const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const tradeRoutes = require("./routes/tradeRoutes");
const facultyRoutes = require("./routes/facultyRoutes");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ API Routes
app.use("/api/trades", tradeRoutes);
app.use("/api/faculties", facultyRoutes);

// ✅ Serve React frontend (build folder)
const frontendPath = path.join(__dirname, "../frontend/build");
app.use(express.static(frontendPath));

// ✅ Correct fallback route for Express 5
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
