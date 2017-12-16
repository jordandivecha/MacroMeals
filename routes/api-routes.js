var calculator = require ("./calculator.js");

var db = require("../models");

module.exports = function (app){

app.put ("/profile", function (req, res) {

  calculator(req.body.gender, req.body.age, req.body.ft, req.body.inches, req.body.lbs, req.body.mifflinStJeor, req.body.exerciseLevel,  req.body.goal,

    function (calculator){
      var profile ={
              firstname : req.body.firstname,
              lastname: req.body.lastname,
              username: req.body.username,
              gender: req.body.gender,
              age: req.body.age,
              ft: req.body.ft,
              inches: req.body.inches,
              lbs: req.body.lbs,
              goal: req.body.goal,
              exerciseLevel: req.body.exerciseLevel,
              mifflinStJeor: req.body.overweight,
              calories: calculator.tdee,
              protein: calculator.protein,
              fat: calculator.fat,
              carbs: calculator.carbs
            };

      console.log(JSON.stringify(profile, null, 2));

<<<<<<< Updated upstream
      db.User.update(
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

        {where: {id: 1}}

      ).then(function(result) {
         console.log(result);
         res.end();
      });


=======
      unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByNutrients?maxCalories=250&maxCarbs=100&maxFat=20&maxProtein=100&minCalories=0&minCarbs=0&minFat=5&minProtein=0&number=10&offset=0")
      .header("X-Mashape-Key", "qR7uXCgKeRmshIMwcyGqmSveS8Glp1FzEuWjsn5bhflGzBebrJ")
      .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
      .end(function (result) {
        console.log(result.body);

      });
>>>>>>> Stashed changes
  });


});

};
