CREATE TABLE orders (
  order_id TEXT PRIMARY KEY,
  value NUMERIC(12,2),
  creation_date TIMESTAMP
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  order_id TEXT REFERENCES orders(order_id) ON DELETE CASCADE,
  product_id INTEGER,
  quantity INTEGER,
  price NUMERIC(12,2)
);