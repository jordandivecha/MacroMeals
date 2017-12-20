$(document).ready(function() {
// $('select').material_select();
$(".button-collapse").sideNav();
var gender = $("#gender").attr("value");
$("#gender").val(gender);
$('#gender').material_select();

var goal = $("#goal").attr("value");
$("#goal").val(goal);
$('#goal').material_select();
var mifflinStJeor = $("#mifflinStJeor").attr("value");
$("#mifflinStJeor").val(mifflinStJeor);
$("#mifflinStJeor").material_select();

var exerciseLevel = $("#exerciseLevel").attr("value");
$("#exerciseLevel").val(exerciseLevel);



});
