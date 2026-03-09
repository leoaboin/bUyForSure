const express = require("express");
const morgan = require("morgan");

const orderRoutes = require("./routes/orderRoutes");
const { swaggerUi, swaggerSpec } = require("./docs/swagger");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/", orderRoutes);

module.exports = app;