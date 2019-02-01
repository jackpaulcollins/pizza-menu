
function Pizza(name, size, dough, toppings){
  this.name = name
  this.size = size,
  this.dough = dough
  this.toppings = toppings
}




//back end

$(document).ready(function(event){
  var toppings = [];
  $("input").click(function(){
    toppings.push($(this).val());
});
  $("#mainForm").submit(function(event){
    var name = $("#name").val();
    var size = $("#sizes option:selected").val();
    var dough = $("#doughs option:selected").val();
    var customerPizza = new Pizza(name, size, dough, toppings)
    event.preventDefault();
    console.log(customerPizza)
    })
});
