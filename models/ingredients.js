module.exports = function (sequelize, DataTypes){
  var Ingredient = sequelize.define("Ingredient", {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    link: DataTypes.STRING

  });

  Ingredient.associate = function(models) {

    Ingredient.belongsTo(models.user, {
        foreignKey: {
            allowNull: false
        }
    });
  };

  return Ingredient;
};
