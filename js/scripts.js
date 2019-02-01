//front-end logic:

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
  if (customerPizza.size === "Small"){
    sizeCost = 10
  } else if (customerPizza.size === "Medium"){
    sizeCost = 12
  } else {
    sizeCost = 14
  }

  cost.html("<strong>Cost: $</strong>" + (sizeCost + finalCost))
}





//back end logic:

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
    $("#thanks").show();
    event.preventDefault();
    console.log(customerPizza)
    })
});
