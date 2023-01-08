const express = require("express");

const app = express();

require("dotenv/config");
require("./config")(app);

const propertyRoutes = require("./routes/property.route");
app.use("/", propertyRoutes);

module.exports = app;
