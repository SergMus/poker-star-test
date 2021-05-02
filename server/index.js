const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/*", (req, res) => {
  fetch(`https://deckofcardsapi.com${req.originalUrl}`, {
    mode: "no-cors"
  })
    .then(res => res.json())
    .then(json => {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(json));
    });
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
