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
