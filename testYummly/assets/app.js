  // Yummly API testing

  // alert('connected!');

  // ============================================

  // Generic search

  // ============================================

 //  var yummyURL = "http://api.yummly.com/v1/api/recipes?_app_id=6ab664f2&_app_key=2d8ee459ec5d1dadf6158eac20d31c68&q=tomato+soup&requirePictures=true";
	// $.ajax({
	//   url: yummyURL,
	//   method: "GET"
	//   }).done(function(recipes) {
	//   	console.log(recipes);

	//   });


  // ============================================

  // Search a recipe with an allergy parameter

  // ============================================

   //  var allergyURL = "http://api.yummly.com/v1/api/recipes?_app_id=6ab664f2&_app_key=2d8ee459ec5d1dadf6158eac20d31c68&q=tomato+soup&requirePictures=true&allowedAllergy[]=396^Dairy-Free";
  	// $.ajax({
  	//   url: allergyURL,
  	//   method: "GET"
  	//   }).done(function(recipes) {
  	//   	console.log(recipes);

  	//   });

  	 // Supported Allergies
	// Dairy, Egg, Gluten, Peanut, Seafood, Sesame, Soy, Sulfite, Tree Nut, Wheat

	// ============================================

	// Search a recipe with a course e.g Breakfast

	// ============================================

	 //  var courseURL = "http://api.yummly.com/v1/api/recipes?_app_id=6ab664f2&_app_key=2d8ee459ec5d1dadf6158eac20d31c68&q=eggs&requirePictures=true&allowedCourse[]=course^course-Breakfast";
		// $.ajax({
		//   url: courseURL,
		//   method: "GET"
		//   }).done(function(recipes) {
		//   	console.log(recipes);

		//   });

		  // Supported courses
		  // Main Dishes, Desserts, Side Dishes, Lunch and Snacks, Appetizers, Salads, Breads, Breakfast and Brunch, Soups, Beverages, Condiments and Sauces, Cocktails


	  // ============================================

	  // Search a recipe with macros

	  // ============================================

	    var macroURL = "http://api.yummly.com/v1/api/recipes?_app_id=6ab664f2&_app_key=2d8ee459ec5d1dadf6158eac20d31c68&q=quesadilla&requirePictures=true&nutrition.CHOCDF.min=0&nutrition.CHOCDF.max=10&nutrition.PROCNT.min=20&nutrition.PROCNT.max=50";
	  	$.ajax({
	  	  url: macroURL,
	  	  method: "GET"
	  	  }).done(function(recipes) {
	  	  	console.log(recipes);

	  	  });

	  	  // Carbs: CHOCDF
	  	  // Protein: PROCNT	
	  	  // Fat: FAT
	  	  // Sugar: SUGAR
	  	  // Fiber: FIBTG











