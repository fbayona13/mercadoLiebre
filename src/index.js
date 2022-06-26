const path = require("path");
const express = require("express");
const server = express();
const port = process.env.PORT || 2020

server.listen(port, () => console.log("mercadoLiebre starting at port http://localhost:" + port));

let public = path.resolve(__dirname, "../public");
server.use(express.static(public));

let views = path.resolve(__dirname, "../src/views");
server.use(express.static(views));

server.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views/home.html"))
);

server.get("/extra", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views/extra.html"))
);

server.get("/login", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views/login.html"))
);

server.get("/register", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views/register.html"))
);

