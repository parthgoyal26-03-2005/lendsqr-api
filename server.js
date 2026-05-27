const express = require("express");
const jsonServer = require("json-server");

const app = express();

const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use("/api", router);

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});