var port = 3000;
var express = require("express");
var app = express();
var path = require('path');

app.listen(port, () => {
    console.log("Server running on port " + port);
});

// All of the sites and routes should be stored in the DB in meta data, will require an absurd amount of time to load the sites though

app.get("/", (req, res, next) => {
    // res.json({});
    res.sendFile(path.join(__dirname + '/index.html'));
});
