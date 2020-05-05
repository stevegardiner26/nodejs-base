var port = 3000;
var express = require("express");
var app = express();
var path = require('path');

app.listen(port, () => {
    console.log("Server running on port " + port);
});

app.get("/", (req, res, next) => {
    // res.json({});
    res.sendFile(path.join(__dirname + '/index.html'));
});
