const request = require("request");
const express = require("express");


const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-08-13&sortBy=publishedAt&apiKey=295f9fadae4447d080297f03f0a64188`;

// Initializing server
const app = express();
const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// Exress public path
app.use(express.static(__dirname));

// Setting HSB
app.set("view engine", "hbs");

request({ url, json: true }, (err, res) => {
  const data = res.body.articles;
  app.get("/", (req, res) => {
    res.render("index", {
      data,
    });
  });
  console.log(typeof data);
});
