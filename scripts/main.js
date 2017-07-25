
var URL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders"
var $form = $("[data-coffee-order='form']")


var $coffeeOrder= $("#coffeeOrder");
var $email = $("#emailInput");
var $flavorShot = $("#flavorShot");
var $strength = $("#strengthLevel");



$form.on("submit", function(event){
	event.preventDefault();
	var $radios = $('input[type="radio"]:checked');
	var store = makeObject($coffeeOrder.val(), $email.val(), $radios.val(), $flavorShot.val(), $strength.val());
	var dataString = JSON.stringify(store);
	localStorage.setItem( "Coffee Orders", dataString);
	sendDataToServer(URL, store);

});

function makeObject(coffeeOrder, email, radio, flavor, strength){
	var object = {};

	object["emailAddress"] = email;
	object["coffee"] = coffeeOrder; 
	object["size"] = radio;
	object["flavor"] = flavor;
	object["strength"] = strength;


	return object;
}




function getObject(){

	var obj = JSON.parse(localStorage.getItem("Coffee Orders"));
	return obj
	
}





function getServerData(site){
	$.get(site, function(x){
		console.log(x)
	})
}

function sendDataToServer(site, object){
	$.post(site, object, function(x){
		console.log(x);
	})
}







// dropdown 
