#! /usr/bin/env node
require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS category (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 )
);

CREATE TABLE IF NOT EXISTS item (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR ( 255 ),
    quantity INTEGER,
    price NUMERIC(10,2),
    category_id INTEGER REFERENCES category(id) ON DELETE SET NULL
);

INSERT INTO category (name)
      VALUES 
        ('Electronics'),
        ('Furniture');

INSERT INTO item (name, quantity, price, category_id)
      VALUES
        ('Laptop', 10, 1200.00, 1),
        ('Smartphone', 20, 800.00, 1),
        ('Office Chair', 5, 150.00, 2),
        ('Desk', 3, 250.00, 2);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@localhost:5432/inventory`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
