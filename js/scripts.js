//front end
// pizza = {
//   size: size,
//   dough: dough,
//   toppings: []
// }














//back end

$(document).ready(function(event){
  $("#mainForm").submit(function(event){
    var size = $("#sizes option:selected").val();
    console.log(size)
    var dough = $("#doughs option:selected").val();
    console.log(dough)
    event.preventDefault();
  });
});
