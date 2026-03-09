const { createOrderSchema } = require("../validations/orderValidation");
const orderService = require("../services/orderService");

async function createOrder(req, res) {

  const { error, value } = createOrderSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details });
  }

  try {

    const order = await orderService.createOrder(value);

    return res.status(201).json(order);

  } catch (err) {

    console.error(err);

    return res.status(500).json({ error: "Internal server error" });

  }

}

module.exports = { createOrder };