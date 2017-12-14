// sends the user to the index page
app.get("/", function(req, res) {
  // res.redirect("/login");
  res.render("index");
});


// sends user to login page
app.get("/login", function(req, res){
  res.render("login");
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
