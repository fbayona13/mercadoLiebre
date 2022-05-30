const path = require("path");
const express = require("express");
const server = express();

server.listen(3000, () => console.log("PRUEBA DE SERVIDOR MERCADO LIEBRE"));

const public = path.resolve(__dirname, "../public");
server.use(express.static(public));

server.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views/home.html"))
);
