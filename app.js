var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
// '__dirname' - Just references to the current directory path Ex) .../workspace/seanjr-personaltests/MyPersonalSite

//Requiring Routes
var mainHomePageRoute = require('./routes/mainPage.js');
var filmPortfolioRoute = require('./routes/filmProductionPortfolio.js');

//Imports Routes
app.use("/", mainHomePageRoute);
app.use("/film_production", filmPortfolioRoute)

app.listen(3152, function()
{
    console.log("Starting My Personal Site server...");
});