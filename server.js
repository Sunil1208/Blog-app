const express = require("express");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/user", (req, res) => {
    console.log(req.body);
    res.send(req.body);
  });

app.listen(PORT, () => {
console.log(`Server up and running on port ${PORT}`);
});