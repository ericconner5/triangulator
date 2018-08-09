$(function() {
  $("form#triTypes").submit(function(event){
    event.preventDefault();
    var input1 = parseInt($("input#side1").val());
    var input2 = parseInt($("input#side2").val());
    var input3 = parseInt($("input#side3").val());

  if (input1 + input2 + input3 === 180) {

    if (input1 === input2 && input1 === input3) {
      alert("Equilateral");
    } else if (input1 !== input2 && input1 !== input3 && input2 !== input3) {
      alert("Isosceles");
    // } else if (input1 === input2 || input1 === input3 || input2 === input3) {

    } else {
      alert("Scalene");
    }} else {
      alert("Not a Triangle -- CANNOT TRIANGULATE! Enter values with a sum of 180.");
    }
});
});
