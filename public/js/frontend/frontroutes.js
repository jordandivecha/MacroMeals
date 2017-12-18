

$("#sendprofile").on("click", function(event) {
    // event.preventDefault();
    console.log("i've been clicked");
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
      window.location.href = "/profile";
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
      var recipeCardSave = $("<a class='btn-floating halfway-fab waves-effect waves-light red'  id ='saverecipe' </a>");

        recipeCard.append(recipeCardImage);
        recipeCard.append(recipeCardTitle);

        recipeCardContent.append(recipeCardMacros);
        recipeCardLink.attr("href", url).attr("target", "_blank");
        recipeCardContent.append(recipeCardLink);

        recipeCard.append(recipeCardContent);
        recipeCardSave.append('<i class="material-icons">save</i>').attr("calories", result[i].calories).attr("protein", result[i].protein).attr("carbs", result[i].carbs).attr("fat", result[i].fat).attr("image", recipeimage).attr("title", recipetitle).attr("recipeid", recipeid).attr("link", url);

        recipeCard.append(recipeCardSave);

        $('#reciperesults').append(recipeCard);


    }
  });

  });

  $("#saverecipe").on('click', function(event){

    console.log("I've been clicked");

    var recipesave ={
      calories: $(this).calories.val(),
      protein: $(this).protein.val(),
      carbs: $(this).carbs.val(),
      fat: $(this).fat.val(),
      image: $(this).image.val(),
      link: $(this).link.val(),
      title: $(this).title.val()
    };
    console.log(recipesave);
    $.ajax({
      method: "POST",
      url: "/api/mealbox",
      data: recipesave
    }).done(function(result){
       Materialize.toast('Recipe Saved!', 4000);
    }


  );
});
