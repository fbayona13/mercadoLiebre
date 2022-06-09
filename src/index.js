const path = require("path");
const express = require("express");
const server = express();
const port = process.env.PORT || 2020

server.listen(3000, () => console.log("PRUEBA DE SERVIDOR MERCADO LIEBRE puerto_2020"));

const public = path.resolve(__dirname, "../public");
server.use(express.static(public));

server.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views/home.html"))
);
