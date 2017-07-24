

var $form = $("[data-coffee-order='form']")


var $coffeeOrder= $("#coffeeOrder");
var $email = $("#emailInput");
var $radio = $(".radio")



$form.on("submit", function(event){
	event.preventDefault();
	$coffeeOrder.val();
	$email.val();
	alert($radio.val())
	
})





