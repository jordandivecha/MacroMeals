module.exports = function (usercalories, userprotein, usercarbs, userfat, cb){
var searchbuilder= {
  calories: usercalories,
  maxCalories: usercalories * 1.05,
  minCalories: usercalories * 0.95,
  carbs: usercarbs,
  maxCarbs: usercarbs * 1.05,
  minCarbs: usercarbs * 0.95,
  fat: userfat,
  maxFat: userfat * 1.05,
  minFat: userfat * 0.95,
  protein: userprotein,
  maxProtein: userprotein * 1.05,
  minProtein: userprotein * 0.95
};
console.log(searchbuilder);
cb (searchbuilder);
};
