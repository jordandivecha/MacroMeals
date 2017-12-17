// sends the user to the index page
module.exports = function (app){
// app.get("/", function(req, res) {
//
//   res.render("index");
// });


// sends user to login page
app.get("/dashboard", function(req, res){
  res.render("dashboard");
});


// sends to user profile
app.get("/profile", function(req, res){
  res.render("profile");
});


// sends users to recipe search page
app.get("/mealsearch", function(req, res){
  res.render("mealsearch");
});


// sends users to saved meals
app.get("/mealbox", function(req, res){
  res.render("mealbox");
});
};
