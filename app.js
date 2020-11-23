const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function (req, res) {
    res.render("what.html");
});

app.get("/who", function(req, res) {
    res.render("who.html");
});

app.get("/how", function(req, res) {
    res.render("how.html");
});

app.get("/why", function(req, res) {
    res.render("why.html");
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});

