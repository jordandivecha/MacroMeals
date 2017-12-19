
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var iifym = require("iifym.js");
var env = require('dotenv').load();
var session    = require('express-session');
var passport   = require('passport');

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

// Sets up the Express App
// =============================================================

var PORT = process.env.PORT || 8080;
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Requiring our models for syncing
var models = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));
app.listen(PORT, function(err) {

    if (!err)
        console.log("Site is live");
    else console.log(err);

});
// Routes
// =============================================================

require('./config/passport.js')(passport, models.user);
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require('./routes/auth.js')(app,passport);


// Syncing our sequelize models and then starting our Express app
// =============================================================
models.sequelize.sync({force: true}).then(function() {

    console.log('Nice! Database looks great. Listening on PORT'+ PORT);

}).catch(function(err) {

    console.log(err, "Something went wrong with the database update!");

});
