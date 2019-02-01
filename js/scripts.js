
function Pizza(name, size, dough, toppings){
  this.name = name
  this.size = size,
  this.dough = dough,
  this.toppings = toppings
}

function pushToCheckout(customerPizza){
  var name = $("#customerName")
  var size = $("#customerSize")
  var dough = $("#customerDough")
  var toppings = $("#customerToppings")
  name.html("<strong>Name: </strong>" + customerPizza.name);
  size.html("<strong>Size: </strong>" + customerPizza.size);
  dough.html("<strong>Dough: </strong>" + customerPizza.dough);
  toppings.html("<strong>Toppings: </strong>"  + customerPizza.toppings)
  }


function updateCost(customerPizza){
  var cost = $("#customerCost")
  var finalCost = (parseInt(customerPizza.toppings.length))
  cost.html("<strong>Cost: $</strong>" + (10 + finalCost))
}





//back end

$(document).ready(function(event){
  var toppings = [];
  $("input").click(function(){
    if ($(this).val())
      toppings.push($(this).val());
});
  $("#mainForm").submit(function(event){
    var name = $("#name").val();
    var size = $("#sizes option:selected").val();
    var dough = $("#doughs option:selected").val();
    console.log(dough)
    var customerPizza = new Pizza(name, size, dough, toppings)
    pushToCheckout(customerPizza)
    updateCost(customerPizza)
    event.preventDefault();
    })
});
