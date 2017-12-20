// sends the user to the index page
var db = require("../models");
var path = require ("path");
module.exports = function (app){
// app.get("/", function(req, res) {
//
//   res.render("index");
// });
app.get("/mealsearch", function (req,res){
  var id = req.session.passport.user;
  console.log(id);

  db.user.findOne(
    {where: {id: id}}

  ).then(function(result) {
   //  var user = {
   //   id: result.dataValues.id,
   //   firstname: result.dataValues.firstname,
   //   lastname: result.dataValues.lastname,
   //   username: result.dataValues.username,
   //   password: result.dataValues.password,
   //   gender: result.dataValues.gender,
   //   age: result.dataValues.age,
   //   ft: result.dataValues.ft,
   //   inches: result.dataValues.inches,
   //   lbs: result.dataValues.lbs,
   //   mifflinStJeor: result.dataValues.mifflinStJeor,
   //   exerciseLevel: result.dataValues.exerciseLevel,
   //   goal: result.dataValues.goal,
   //   protein: result.dataValues.protein,
   //   proteinmeal: (result.dataValues.protein)/5,
   //   fat: result.dataValues.fat,
   //   fatmeal: result.dataValues.fat/5,
   //   carbs: result.dataValues.carbs,
   //   carbsmeal: result.dataValues.carbs/5,
   //   calories: result.dataValues.calories,
   //   caloriesmeal: result.dataValues.calories/5
   // };
   res.render("mealsearch", result);
   });
});

app.get("/profile", function(req, res){
  var id = req.session.passport.user;
  console.log(id);
  db.user.findOne(
    {where: {id: id}}

  ).then(function(result) {


  res.render("profile", result);

});
});





app.get("/mealbox", function (req,res){
  var id = req.session.passport.user;
  console.log(id);
  db.user.find({
    where:{id: id},
  include: [{
    model: db.Meal}]
      }).then(function(result){
    res.render("mealbox", result);
});
});


app.get("/api/mealbox", function (req,res){
  var id = req.session.passport.user;
  console.log(id);
  db.user.find({
    where:{id: id},
  include: [{
    model: db.Meal}]
  }).then(function(result){
    res.json(result);
  });
});

app.get("/ingredientsearch", function (req,res){
  var id = req.session.passport.user;
  console.log(id);
  db.user.findOne(
    {where:
      {id: id}}
    ).then(function(result){
  res.render("ingredientsearch", result);
});
});





app.get("*", function(req,res){
  res.sendFile(path.join(__dirname, "../public/404page/errpage.html"));
});
};
