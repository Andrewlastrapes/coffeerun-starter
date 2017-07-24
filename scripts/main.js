

var $form = $("[data-coffee-order='form']")


var $coffeeOrder= $("#coffeeOrder");
var $email = $("#emailInput");
var $flavorShot = $("#flavorShot");
var $strength = $("#strengthLevel");



$form.on("submit", function(event){
	event.preventDefault();
	var $radios = $('input[type="radio"]:checked');
	var store = makeObject($coffeeOrder.val(), $email.val());
	var dataString = JSON.stringify(store);
	localStorage.setItem( "Coffee Orders", dataString);

});

function makeObject(coffeeOrder, email){
	var object = {};

	object["emailAddress"] = email;
	object["coffee"] = coffeeOrder; 


	return object;
}


JSON.parse()




function() {

	localStorage.getItem()

}




// ajax-JSON-API's 

// json.parse



// json.stringify