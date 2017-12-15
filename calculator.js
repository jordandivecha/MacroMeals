var dummier = {
  'gender': 'male',           // Required if using Mifflin-St Jeor
  'age': 22,                  // Required if using Mifflin-St Jeor
  'isMetric': false,          // Provide metric inputs? (cm, kg)
  'ft': 5,                    // Required if using Mifflin-St Jeor and isMetric == false
  'in': 10,                   // Required if using Mifflin-St Jeor and isMetric == false
  'cm': null,                 // Required if using Mifflin-St Jeor and isMetric == true
  'lbs': 170,                 // Required if isMetric == false
  'kg': null,                 // Required if isMetric == true
  'mifflinStJeor': true,      // True for lean individuals, false for overweight
  'bodyFatPercentage': null,  // Required if not using Mifflin-St Jeor
  'exerciseLevel': 2,         // See exerciseLevelActivityMultiplier()
  'goal': 1.05,               // TDEE Modifier. Recommended: Maintain(1.0), Cut(0.85 or 0.8), Bulk(1.05 or 1.1)
  'protein': 0.7,             // Protein grams per lb of body weight. Recommend: 0.7, 0.8, or 0.9
  'fat': 0.35                 // Fat grams per lb of body weight. Recommend: 0.3, 0.35, or 0.4
};


var dummierMacros = iifym.calculate(dummier);
console.log(dummierMacros);
