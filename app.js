const express = require("express");
const faker = require("faker");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//faker data
const company = faker.company.companyName();
const city = faker.address.city();
const country = faker.address.country();
const date = faker.date.recent();
var format = require('date-format');
var dateformatted = format.asString('MM/dd/yyyy', date);

//routes
app.get("/", function (req, res) {
    res.render("what.ejs", {
    
            "company":company,
	        "city":city,
	        "country":country,
	        "date":dateformatted
	        
    });
}); //root route    
    
app.get("/who", function(req, res) {
    res.render("who.ejs",{
    
            "company":company,
	        "city":city,
	        "country":country,
	        "date":dateformatted
	        
    });
});

app.get("/how", function(req, res) {
    res.render("how.ejs",{
    
            "company":company,
	        "city":city,
	        "country":country,
	        "date":dateformatted
	        
    });
});

app.get("/why", function(req, res) {
    res.render("why.ejs",{
    
            "company":company,
	        "city":city,
	        "country":country,
	        "date":dateformatted
	        
    });
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});

