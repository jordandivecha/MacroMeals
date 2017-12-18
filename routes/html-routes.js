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
  db.user.findOne(
    {where: {id: id}}

  ).then(function(result) {
    var user = {
      id: result.dataValues.id,
     firstname: result.dataValues.firstname,
     lastname: result.dataValues.lastname,
     username: result.dataValues.username,
     password: result.dataValues.password,
     gender: result.dataValues.gender,
     age: result.dataValues.age,
     ft: result.dataValues.ft,
     inches: result.dataValues.inches,
     lbs: result.dataValues.lbs,
     mifflinStJeor: result.dataValues.mifflinStJeor,
     exerciseLevel: result.dataValues.exerciseLevel,
     goal: result.dataValues.goal,
     protein: result.dataValues.protein,
     proteinmeal: (result.dataValues.protein)/5,
     fat: result.dataValues.fat,
     fatmeal: result.dataValues.fat/5,
     carbs: result.dataValues.carbs,
     carbsmeal: result.dataValues.carbs/5,
     calories: result.dataValues.calories,
     caloriesmeal: result.dataValues.calories/5
   };
   res.render("mealsearch", user);
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
