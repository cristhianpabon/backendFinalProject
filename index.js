const express = require("express");
const port = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("¡Hola desde Express!");
});

//products

app.get("/api/products/", (req, res) => {
  res.send("¡Hola desde Express!");
});

app.get("/api/products/:id", (req, res) => {
  res.send("¡Hola desde Express!");
});

app.post("/api/products/", (req, res) => {
  res.send("¡Hola desde Express!");
});

app.put("/api/products/:pid", (req, res) => {
  res.send("¡Hola desde Express!");
});

app.delete("/api/products/:pid", (req, res) => {
  res.send("¡Hola desde Express!");
});

//carts

app.post("/api/carts/", (req, res) => {
  res.send("¡Hola desde Express!");
});

app.get("/api/carts/:cid", (req, res) => {
  res.send("¡Hola desde Express!");
});

app.post("/api/carts/:cid/product/:pid", (req, res) => {
  res.send("¡Hola desde Express!");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
