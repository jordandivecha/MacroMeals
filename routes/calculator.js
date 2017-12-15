var iifym = require("iifym.js");
module.exports = function (gender, age, ft, inches, lbs, mifflinStJeor, exerciseLevel, goal, cb){
var userinfo = {
  'gender': gender,           // Required if using Mifflin-St Jeor
  'age': age,                  // Required if using Mifflin-St Jeor
  'isMetric': false,          // Provide metric inputs? (cm, kg)
  'ft': ft,                    // Required if using Mifflin-St Jeor and isMetric == false
  'in': inches,                   // Required if using Mifflin-St Jeor and isMetric == false
  'cm': null,                 // Required if using Mifflin-St Jeor and isMetric == true
  'lbs': lbs,                 // Required if isMetric == false
  'kg': null,                 // Required if isMetric == true
  'mifflinStJeor': mifflinStJeor,      // True for lean individuals, false for overweight
  'bodyFatPercentage': null,  // Required if not using Mifflin-St Jeor
  'exerciseLevel': exerciseLevel,         // See exerciseLevelActivityMultiplier()
  'goal': goal,               // TDEE Modifier. Recommended: Maintain(1.0), Cut(0.85 or 0.8), Bulk(1.05 or 1.1)
  'protein': 0.7,             // Protein grams per lb of body weight. Recommend: 0.7, 0.8, or 0.9
  'fat': 0.35                 // Fat grams per lb of body weight. Recommend: 0.3, 0.35, or 0.4
};

var calculator = iifym.calculate(userinfo);
console.log (calculator);

cb (calculator);
};
