var calculator = require ("./calculator.js");
var bodyparser = require("body-parser");
var db = require("../models");

var unirest = require("unirest");
var searchbuilder = require("./searchbuilder.js");

module.exports = function (app){

app.put ("/profile", function (req, res) {
 var id = req.session.passport.user;
  var mifflinStJeor = req.body.mifflinStJeor;
if (req.body.mifflinStJeor === "true"){
  req.body.mifflinStJeor = true;
  mifflinStJeor = true;

}
else if (req.body.mifflinStJeor === "false"){
  req.body.mifflinStJeor = false;
  mifflinStJeor = false;
}
var ft = parseFloat(req.body.ft);
var lbs = parseFloat(req.body.lbs);
var inches = parseFloat(req.body.inches);
var age = parseFloat(req.body.age);
var exerciseLevel = parseFloat(req.body.exerciseLevel);
var goal = parseFloat(req.body.goal);

  calculator(req.body.gender, age, ft, inches, lbs, mifflinStJeor, exerciseLevel,  goal,

    function (calculator){
      var profile ={
              firstname : req.body.firstname,
              lastname: req.body.lastname,
              username: req.body.username,
              gender: req.body.gender,
              age: age,
              ft: ft,
              inches: inches,
              lbs: lbs,
              goal: goal,
              exerciseLevel: exerciseLevel,
              mifflinStJeor: mifflinStJeor,
              calories: calculator.tdee,
              protein: calculator.protein,
              fat: calculator.fat,
              carbs: calculator.carbs
            };

      console.log(JSON.stringify(profile, null, 2));


      db.user.update(
        {
          firstname : profile.firstname,
          lastname: profile.lastname,
          username: profile.username,
          gender: profile.gender,
          age: profile.age,
          ft: profile.ft,
          inches: profile.inches,
          lbs: profile.lbs,
          goal: profile.goal,
          exerciseLevel: profile.exerciseLevel,
          mifflinStJeor: profile.mifflinStJeor,
          calories: profile.calories,
          protein: profile.protein,
          fat: profile.fat,
          carbs: profile.carbs
        },

        {where: {id: id}}

      ).then(function(err, result) {
        if (err){
          console.log (err);
        }
         res.json(profile);
         res.end();
      });





});

});

app.post("/api/mealsearch", function(req,res){
  // variable templates - getting from user calories, carbs, fat, and protein

  var usercalories = parseFloat(req.body.calories);
  var userprotein = parseFloat(req.body.protein);
  var usercarbs = parseFloat(req.body.carbs);
  var userfat= parseFloat(req.body.fat);

  searchbuilder(usercalories, userprotein, usercarbs, userfat, function(searchbuilder){
    var url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByNutrients?maxCalories=" + searchbuilder.maxCalories + "&maxCarbs=" + searchbuilder.maxCarbs + "&maxFat=" + searchbuilder.maxFat + "&maxProtein=" + searchbuilder.maxProtein + "&minCalories=" + searchbuilder.minCalories + "&minCarbs=" + searchbuilder.minCarbs + "&minFat=" + searchbuilder.minFat + "&minProtein=" + searchbuilder.minProtein + "&number=10&offset=0&random=false";


    unirest.get(url)
    .header("X-Mashape-Key", "qR7uXCgKeRmshIMwcyGqmSveS8Glp1FzEuWjsn5bhflGzBebrJ")
    .header("Accept", "application/json")
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
      res.json(result.body);
  });
});
});
};
