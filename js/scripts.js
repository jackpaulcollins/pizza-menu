
function Pizza(name, size, dough, toppings){
  this.name = name
  this.size = size,
  this.dough = dough
}




//back end

$(document).ready(function(event){
  $("#mainForm").submit(function(event){
    var name = $("#name").val();
    var size = $("#sizes option:selected").val();
    var dough = $("#doughs option:selected").val();
    var toppings = $('form input:radio').val();
    var customerPizza = new Pizza(name, size, dough, toppings)
    console.log(customerPizza)
    event.preventDefault();
  });


});
