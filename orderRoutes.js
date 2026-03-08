const express = require("express");

const router = express.Router();

const controller = require("../controllers/orderController");

router.post("/order", controller.createOrder);

module.exports = router;