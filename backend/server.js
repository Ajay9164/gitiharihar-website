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

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
