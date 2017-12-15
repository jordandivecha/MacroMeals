var calculator = require ("./calculator.js");

module.exports = function (app){

app.put ("/profile", function (req, res){

  calculator(req.body.gender, req.body.age, req.body.ft, req.body.in, req.body.lbs, req.body.overweight, req.body.exerciseLevel,  req.body.goal,

    function (calculator){
      var profile ={
              firstname : req.body.firstname,
              lastname: req.body.lastname,
              username: req.body.username,
              gender: req.body.gender,
              age: req.body.age,
              isMetric: false,
              cm: null,
              kg: null,
              bodyFatPercentage: null,
              ft: req.body.ft,
              in: req.body.in,
              lbs: req.body.lbs,
              goal: req.body.goal,
              exerciseLevel: req.body.exerciseLevel,
              notoverweight: req.body.overweight,
              calories: calculator.tdee,
              protein: calculator.protein,
              fat: calculator.fat,
              carbs: calculator.carbs
            };

      console.log(JSON.stringify(profile, null, 2));
  });


});

};
