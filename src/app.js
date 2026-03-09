const express = require("express");
const morgan = require("morgan");

const orderRoutes = require("./routes/orderRoutes");
const { swaggerUi, swaggerSpec } = require("./docs/swagger");

const app = express();

const healthRoutes = require('./routes/health')

app.use('/', healthRoutes)

app.use(express.json());
app.use(morgan("dev"));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/", orderRoutes);

module.exports = app;

app.get("/", (req, res) => {
  res.json({
    message: "BuyForSure API",
    status: "online",
    docs: "/docs",
    health: "/health"
  })
})
