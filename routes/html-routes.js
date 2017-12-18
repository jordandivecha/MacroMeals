// sends the user to the index page
var db = require("../models");
module.exports = function (app){
// app.get("/", function(req, res) {
//
//   res.render("index");
// });


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
    {where: {id: id}}

  ).then(function(err, result) {
    console.log(result);
  res.render("mealsearch", {mealsearch: result});
});
});

app.get("/mealbox", function (req,res){
  var id = req.session.passport.user;
  console.log(id);
  db.Meal.findAll({
    where:{
      userId: id
    }
  }).then(function(result){
    console.log(result);
    res.render("mealbox", {recipes: result});
  });

});

app.get("/ingredientsearch", function (req,res){
  res.render("ingredientsearch");
});
};
