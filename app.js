// TODO routing işlemleri

const path = require("path"); // html dosyalarını acabılmek için kullanılır
const express = require("express");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "contact.html"));
});

app.get("/users/:userID", (req, res) => {
  // routing islemleri
  res.send(req.params.userID);
});

app.listen(port, hostname, () => {
  console.log("server çalısıyor http://" + hostname + ":" + port + "/");
});
