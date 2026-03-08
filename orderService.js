const db = require("../db/db");

async function createOrder(body) {

  const client = await db.pool.connect();

  try {

    await client.query("BEGIN");

    const order = {
      orderId: body.numeroPedido,
      value: body.valorTotal,
      creationDate: body.dataCriacao
    };

    await client.query(
      "INSERT INTO orders(order_id,value,creation_date) VALUES($1,$2,$3)",
      [order.orderId, order.value, order.creationDate]
    );

    for (const item of body.items) {

      await client.query(
        "INSERT INTO items(order_id,product_id,quantity,price) VALUES($1,$2,$3,$4)",
        [
          order.orderId,
          item.idItem,
          item.quantidadeItem,
          item.valorItem
        ]
      );

    }

    await client.query("COMMIT");

    return order;

  } catch (err) {

    await client.query("ROLLBACK");
    throw err;

  } finally {

    client.release();

  }

}

module.exports = { createOrder };