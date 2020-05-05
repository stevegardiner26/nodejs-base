var port = 3000;
var express = require("express");
var app = express();

app.listen(port, () => {
    console.log("Server running on port " + port);
});

app.get("/", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});
