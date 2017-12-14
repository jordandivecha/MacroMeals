
module.exports = function(sequelize, DataTypes) {

var User = sequelize.define("User", {
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  isMetric: {
    type: DataTypes.BOOLEAN
  },
  ft: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  in: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cm: {
    type: DataTypes.INTEGER
  },
  lbs: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  kg: {
    type: DataTypes.INTEGER
  },
  mifflinStJeor: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  bodyFatPercentage: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  exerciseLevel: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  goal: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  protein: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fat: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

  return User;
};


// text: {
//      type: DataTypes.STRING,
//      // AllowNull is a flag that restricts a todo from being entered if it doesn't
//      // have a text value
//      allowNull: false,
//      // len is a validation that checks that our todo is between 1 and 140 characters
//      validate: {
//        len: [1, 140]
//      }
//    },


// 'gender': 'male',           // Required if using Mifflin-St Jeor
//   'age': 22,                  // Required if using Mifflin-St Jeor
//   'isMetric': false,          // Provide metric inputs? (cm, kg)
//   'ft': 5,                    // Required if using Mifflin-St Jeor and isMetric == false
//   'in': 10,                   // Required if using Mifflin-St Jeor and isMetric == false
//   'cm': null,                 // Required if using Mifflin-St Jeor and isMetric == true
//   'lbs': 170,                 // Required if isMetric == false
//   'kg': null,                 // Required if isMetric == true
//   'mifflinStJeor': true,      // True for lean individuals, false for overweight
//   'bodyFatPercentage': null,  // Required if not using Mifflin-St Jeor
//   'exerciseLevel': 2,         // See exerciseLevelActivityMultiplier()
//   'goal': 1.05,               // TDEE Modifier. Recommended: Maintain(1.0), Cut(0.85 or 0.8), Bulk(1.05 or 1.1)
//   'protein': 0.7,             // Protein grams per lb of body weight. Recommend: 0.7, 0.8, or 0.9
//   'fat': 0.35
