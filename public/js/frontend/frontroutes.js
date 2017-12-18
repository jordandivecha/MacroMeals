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

      var baseurl = "http://spoonacular.com/recipe/";
      var recipetitle = result[i].title;
      var recipeid = result[i].id;
      var recipeimage= result[i].image;
      recipetitledashes = recipetitle.replace(/\s+/g, '-').toLowerCase();
      var url = baseurl + recipetitledashes + "-" + recipeid;
      console.log(url);

      var recipeCard = $("<div class = 'card recipecard' id = 'recipecard"+recipeid+"' >");
      var recipeCardImage = $("<div class = 'card-image'><img src='"+ recipeimage +"'>");
      var recipeCardTitle = $("<span class = 'card-title'>"+recipetitle+"</span>");
      var recipeCardContent = $('<div class="card-content">');
      var recipeCardMacros = $('<p>Calories(g): '+ result[i].calories +'</p><br><p>Protein(g): '+ result[i].protein + '</p> <br> <p>Carbs(g): '+ result[i].carbs +' </p><br> <p>Fat(g): ' + result[i].fat + '</p><br>');
      var recipeCardLink = $('<a>Recipe Link</a>');
      var recipeCardSave = $("<a class='btn-floating halfway-fab waves-effect waves-light red' id='saverecipe'</a>");

        recipeCard.append(recipeCardImage);
        recipeCard.append(recipeCardTitle);

        recipeCardContent.append(recipeCardMacros);
        recipeCardLink.attr("href", url);
        recipeCardContent.append(recipeCardLink);

        recipeCard.append(recipeCardContent);
        recipeCardSave.append('<i class="material-icons">save</i>');
        recipeCard.append(recipeCardSave);

        $('#reciperesults').append(recipeCard);


    }
  });

  });

  $("#saverecipe")
