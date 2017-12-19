// if(document.URL.indexOf("/api/mealbox") >= 0){
//   $.ajax({
//     method: "GET",
//     url: "/api/mealbox"})
//     .done(function (result){
//       console.log(result);
//       var recipes = result.Meals;
//       for (var i =0; i<recipes.length; i++ ){
//       var recipetitle = recipes[i].title;
//       var recipeid = recipes[i].id;
//       var recipeimage= recipes[i].image;
//       var url = recipes[i].link;
//
//     var recipeCard = $("<div class = 'card recipecard' id = 'recipecard>");
//     var recipeCardImage = $("<div class = 'card-image' id= 'recipeimage'><img src='"+ recipeimage +"'>");
//     var recipeCardTitle = $("<span class = 'card-title'>"+recipetitle+"</span>");
//     var recipeCardContent = $('<div class="card-content">');
//     var recipeCardMacros = $("<p class = 'recipecalories' >Calories(g): "+ recipes[i].calories +"</p><br><p class = 'recipeprotein'>Protein(g): "+ recipes[i].protein + "</p> <br> <p class='recipecarbs'>Carbs(g): "+ recipes[i].carbs +" </p><br> <p class='recipefat'>Fat(g): " + recipes[i].fat + "</p><br>");
//     var recipeCardLink = $('<a id = "recipelink">Recipe Link</a>');
//     var recipeCardSave = $("<a class='btn-floating halfway-fab waves-effect waves-light red saverecipe' </a>");
//
//       recipeCard.append(recipeCardImage);
//       recipeCard.append(recipeCardTitle);
//
//       recipeCardContent.append(recipeCardMacros);
//       recipeCardLink.attr("href", url).attr("target", "_blank");
//       recipeCardContent.append(recipeCardLink);
//
//       recipeCard.append(recipeCardContent);
//       recipeCardSave.append('<i class="material-icons">save</i>').attr("calories", parseFloat(recipes[i].calories)).attr("protein", parseFloat(recipes[i].protein)).attr("carbs", parseFloat(recipes[i].carbs)).attr("fat", parseFloat(recipes[i].fat)).attr("image", recipeimage).attr("title", recipetitle).attr("recipeid", recipeid).attr("link", url);
//
//       recipeCard.append(recipeCardSave);
//
//       $('.mealbox').append(recipeCard);
//     }
//     });
// }



$(document).on('click', ".deletebtn", function(event){
  event.preventDefault();
  Materialize.toast('Recipe Deleted!', 2000);
  var id = $(this).attr("recipeid");
  $.ajax({
    method: "DELETE",
    url: '/mealbox/'+id
  }).done(function(result){
    window.location.href = "/mealbox";

  }


);


});

$(document).on('click', ".saveingredients", function(event){
  event.preventDefault();
  console.log("I've been clicked");

  var ingredientssave ={

    image: $(this).attr("image"),
    link: $(this).attr("link"),
    title: $(this).attr("title")

  };
  console.log(ingredientssave);
  $.ajax({
    method: "POST",
    url: "/ingredientsbox",
    data: ingredientssave
  }).done(function(result){
     Materialize.toast('Recipe Saved!', 4000);
  }


);


});
$("#logoutbutton").on("click", function(event){
  event.preventDefault();
  window.location.href = "/logout";
});
$("#signupbutton").on("click", function(event){
  event.preventDefault();

  window.location.href = "/signup";
});
$("#sendprofile").on("click", function(event) {
    // event.preventDefault();
    Materialize.toast('Profile Saved!', 2000);
    // var id = $(this).data("id")
    var userprofile = {
    firstname: $("#firstname").val(),
    lastname: $("#lastname").val(),
    username: $("#username").val(),
    gender: $("#gender").val(),
    age: $("#age").val(),
    lbs: $("#lbs").val(),
    ft: $("#ft").val(),
    inches: $("#inches").val(),
    goal: $("#goal").val(),
    exerciseLevel: $("#exerciseLevel").val(),
    mifflinStJeor: $("#mifflinStJeor").val()
  };
  console.log(userprofile);

    $.ajax({
      method: "PUT",
      url: "/profile",
      data: userprofile})
      .done(function (){
      window.location.href = "/mealsearch";
    });


  });

  $("#submitsearch").on("click", function(event){
    event.preventDefault();
    console.log("I've been clicked");

    var usersearch ={
      calories: $("#calories").val(),
      protein: $("#protein").val(),
      carbs: $("#carbs").val(),
      fat: $("#fat").val()
    };

  console.log(usersearch);
  $.ajax({
    method: "POST",
    url: "/api/mealsearch",
    data: usersearch
  }).done(function(result){
    for (var i =0; i<result.length; i++ ){

      var baseurl = "https://spoonacular.com/recipe/";
      var recipetitle = result[i].title;
      var recipeid = result[i].id;
      var recipeimage= result[i].image;
      recipetitledashes = recipetitle.replace(/\s+/g, '-').toLowerCase();
      var url = baseurl + recipetitledashes + "-" + recipeid;
      console.log(url);

      var recipeCard = $("<div class = 'card recipecard' id = 'recipecard"+recipeid+"' >");
      var recipeCardImage = $("<div class = 'card-image' id= 'recipeimage'><img src='"+ recipeimage +"'>");
      var recipeCardTitle = $("<span class = 'card-title'>"+recipetitle+"</span>");
      var recipeCardContent = $('<div class="card-content">');
      var recipeCardMacros = $("<p class = 'recipecalories' >Calories(g): "+ result[i].calories +"</p><br><p class = 'recipeprotein'>Protein(g): "+ result[i].protein + "</p> <br> <p class='recipecarbs'>Carbs(g): "+ result[i].carbs +" </p><br> <p class='recipefat'>Fat(g): " + result[i].fat + "</p><br>");
      var recipeCardLink = $('<a id = "recipelink">Recipe Link</a>');
      var recipeCardSave = $("<a class='btn-floating halfway-fab waves-effect waves-light red saverecipe' </a>");

        recipeCard.append(recipeCardImage);
        recipeCard.append(recipeCardTitle);

        recipeCardContent.append(recipeCardMacros);
        recipeCardLink.attr("href", url).attr("target", "_blank");
        recipeCardContent.append(recipeCardLink);

        recipeCard.append(recipeCardContent);
        recipeCardSave.append('<i class="material-icons">save</i>').attr("calories", parseFloat(result[i].calories)).attr("protein", parseFloat(result[i].protein)).attr("carbs", parseFloat(result[i].carbs)).attr("fat", parseFloat(result[i].fat)).attr("image", recipeimage).attr("title", recipetitle).attr("recipeid", recipeid).attr("link", url);

        recipeCard.append(recipeCardSave);

        $('#reciperesults').append(recipeCard);


    }
  });

  });

  $(document).on('click', ".saverecipe", function(event){
    event.preventDefault();
    Materialize.toast('Recipe Saved!', 2000);

    var recipesave ={
      calories: $(this).attr("calories"),
      protein: $(this).attr("protein"),
      carbs: $(this).attr("carbs"),
      fat: $(this).attr("fat"),
      image: $(this).attr("image"),
      link: $(this).attr("link"),
      title: $(this).attr("title")
    };
    console.log(recipesave);
    $.ajax({
      method: "POST",
      url: "/mealbox",
      data: recipesave
    }).done(function(result){

    }


  );


});

  $("#ingredientsearch").on("click", function(event) {

    event.preventDefault();
    console.log("I've been clicked");

    var ingredientsearch ={
      firstingredient: $("#firstingredient").val(),
      secondingredient: $("#secondingredient").val(),
      thirdingredient: $("#thirdingredient").val(),
      fourthingredient: $("#fourthingredient").val(),
      fifthingredient: $("#fifthingredient").val()
    };

    console.log(ingredientsearch);
    $.ajax({
      method: "POST",
      url: "/api/ingredientsearch",
      data: ingredientsearch
    }).done(function(result){

      for (var i =0; i<result.length; i++ ){

        var baseurl = "https://spoonacular.com/recipe/";
        var ingredientstitle = result[i].title;
        var ingredientsid = result[i].id;
        var ingredientsimage= result[i].image;
        ingredientstitledashes = ingredientstitle.replace(/\s+/g, '-').toLowerCase();
        var url = baseurl + ingredientstitledashes + "-" + ingredientsid;
        console.log(url);

        var ingredientsCard = $("<div class = 'card ingredientscard' id = 'ingredientscard"+recipeid+"' >");
        var ingredientsCardImage = $("<div class = 'card-image' id= 'ingredientsimage'><img src='"+ ingredientsimage +"'>");
        var ingredientsCardTitle = $("<span class = 'card-title'>"+ingredientstitle+"</span>");
        var ingredientsCardContent = $('<div class="card-content">');
        var ingredientsCardLink = $('<a id = "recipelink">Recipe Link</a>');
        var recipeCardSave = $("<a class='btn-floating halfway-fab waves-effect waves-light red saveingredients' </a>");

          ingredientsCard.append(ingredientsCardImage);
          ingredientsCard.append(ingredientsCardTitle);


          ingredientsCardLink.attr("href", url).attr("target", "_blank");
          ingredientsCardContent.append(ingredientsCardLink);

          ingredientsCard.append(ingredientsCardContent);
          ingredientsCardSave.append('<i class="material-icons">save</i>').attr("image", ingredientsimage).attr("title", ingredientstitle).attr("ingredientsid", ingredientsid).attr("link", url);

          ingredientsCard.append(ingredientsCardSave);

          $('#ingredientsresults').append(ingredientsCard);


      }


  });
});
