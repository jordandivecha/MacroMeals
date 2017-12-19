var calculator = require ("./calculator.js");
var bodyparser = require("body-parser");
var db = require("../models");

var unirest = require("unirest");
var searchbuilder = require("./searchbuilder.js");

// var ingredientBuilder = require("./ingredientBuilder.js");

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
              caloriesmeal: ((calculator.tdee)/5),
              protein: calculator.protein,
              proteinmeal: (calculator.protein)/5,
              fat: calculator.fat,
              fatmeal: (calculator.fat)/5,
              carbs: calculator.carbs,
              carbsmeal: (calculator.carbs)/5
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
          carbs: profile.carbs,
          caloriesmeal: profile.caloriesmeal,
          fatmeal: profile.fatmeal,
          carbsmeal: profile.carbsmeal,
          proteinmeal: profile.proteinmeal
        },

        {where: {id: id}}

      ).then(function(result) {
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
    var url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByNutrients?maxCalories=" + searchbuilder.maxCalories + "&maxCarbs=" + searchbuilder.maxCarbs + "&maxFat=" + searchbuilder.maxFat + "&maxProtein=" + searchbuilder.maxProtein + "&minCalories=" + searchbuilder.minCalories + "&minCarbs=" + searchbuilder.minCarbs + "&minFat=" + searchbuilder.minFat + "&minProtein=" + searchbuilder.minProtein + "&number=25&offset=0&random=false";


    unirest.get(url)
    .header("X-Mashape-Key", "qR7uXCgKeRmshIMwcyGqmSveS8Glp1FzEuWjsn5bhflGzBebrJ")
    .header("Accept", "application/json")
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
      res.json(result.body);
  });
});
});

app.post("/mealbox", function(req,res){
  var id = req.session.passport.user;
  console.log(req.body.link, req.body.title);

  db.Meal.create({
    userId: id,
    image: req.body.image,
    link: req.body.link,
    title: req.body.title,
    calories: req.body.calories,
    fat: req.body.fat,
    protein: req.body.protein,
    carbs: req.body.carbs

  }).then(function(result){
    console.log(result);
  });
});

// =========================================

// Search recipes by ingredients

// =========================================

app.post("/api/ingredientsearch", function(req, res) {

  console.log(req.body);

  var ingredientOne = req.body.firstingredient;
  var ingredientTwo = req.body.secondingredient;
  var ingredientThree = req.body.thirdingredient;
  var ingredientFour = req.body.fourthingredient;
  var ingredientFive = req.body.fifthingredient;

  // console.log("ING ONE0" + ingredientOne)




    unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=" + ingredientOne + "%2C" + ingredientTwo + "%2C" + ingredientThree + "%2C" + ingredientFour + "%2C" + ingredientFive + "&limitLicense=true&number=25&ranking=2")
    .header("X-Mashape-Key", "qR7uXCgKeRmshIMwcyGqmSveS8Glp1FzEuWjsn5bhflGzBebrJ")
    .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
    .end(function (result) {
      console.log(result.body);
      res.json(result.body);


      });






  });

app.delete("/mealbox/:id", function (req, res){
  var id = req.params.id;
  db.Meal.destroy({
    where: {
      id: id
    }
  }).then(function(result){
    console.log("Deleted recipe.");
    res.json(result);
  });


});

app.post("/ingredientsbox", function (req,res){
  var id = req.session.passport.user;

  db.Ingredient.create({
    userId: id,
    image: req.body.image,
    link: req.body.link,
    title: req.body.title,

  }).then(function(result){
    console.log("yay");
  });
});
};
