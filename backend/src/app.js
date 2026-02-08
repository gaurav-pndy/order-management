const express = require("express");
const cors = require("cors");

const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);

module.exports = app;
