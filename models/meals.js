module.exports = function (sequelize, DataTypes){
  var Meal = sequelize.define("Meal", {
    image: DataTypes.STRING,
    link: DataTypes.STRING,
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    calories: DataTypes.FLOAT,
    caloriesmeal: DataTypes.FLOAT,
    protein: DataTypes.FLOAT,
    proteinmeal: DataTypes.FLOAT,
    fat: DataTypes.FLOAT,
    fatmeal: DataTypes.FLOAT,
    carbs: DataTypes.FLOAT,
    carbmeal: DataTypes.FLOAT

  });
  return Meal;
};
