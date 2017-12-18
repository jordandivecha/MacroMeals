module.exports = function (sequelize, DataTypes){
  var Meal = sequelize.define("Meal", {
    image: DataTypes.STRING,
    link: DataTypes.STRING,
    title: DataTypes.STRING,
    calories: DataTypes.FLOAT,
    protein: DataTypes.FLOAT,
    fat: DataTypes.FLOAT,
    carbs: DataTypes.FLOAT


  });

  Meal.associate = function(models) {

    Meal.belongsTo(models.user, {
        foreignKey: {
            allowNull: false
        }
    });
  };

  return Meal;
};
