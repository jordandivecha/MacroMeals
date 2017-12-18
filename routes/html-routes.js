// sends the user to the index page
module.exports = function (app){
// app.get("/", function(req, res) {
//
//   res.render("index");
// });

var db = require("../models");
// sends user to login page
app.get("/dashboard", function(req, res){
res.render("dashboard");


});


app.get("/profile", function(req, res){


  res.render("profile");

});


app.get("/index", function(req,res){
  var id = req.session.passport.user;

  db.user.findAll(
    {where:
      {id: id}
    }
  ).then(function(err, result) {
    console.log(result);
    res.render("index", {result: result});

  });
});

app.get("/mealsearch", function (req,res){
  var id = req.session.passport.user;
  console.log(id);
  db.user.findAll(
    {where: {"id": id}}

  ).then(function(err, result) {
    console.log(result);
  res.render("mealsearch", {mealsearch: result});
});
});

app.get("/mealbox", function (req,res){
  res.render("mealbox");
});

app.get("/ingredientsearch", function (req,res){
  res.render("ingredientsearch");
});
};
