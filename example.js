//Create variables for the welcome message//
var greeting = 'Howdy';
var name1 = 'Molly';
var message = ', please check your order:';
//Calculate the three variables above to create the welcome message//
var welcome = greeting + name1 + message;

//Create cariables to hold details about the sign//
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandtotal = subTotal + shipping;

//Get the elemnt taht has an ID of greeting//
var el = document.createElement('greeting');
//Replace the content of that element with the personalized welcome message///
el.textContent = welcome;

//Get the element that has an ID userSign then update its contents//
var elSign = document.createElement('userSign');
elSign.textContent = sign;

//Get the element that has an ID of tiles then update its contents//
var elTiles = document.createElement('tiles');
elTiles.textContent = tiles;

//Get the element that has an ID of subtotal then update its contents//
var elSubTotal = document.createElement('subTotal');
elSubTotal.textContent = '$' + subTotal;

//Get the element that has an ID of shipping then update its contents//
var elShipping = document.createElement('shipping');
elShipping.textContent = '$' + shipping;

//Get the element that has an ID of grandTotal then update its contents//
var elGrandTotal = document.createElement('grandTotal');
elGrandTotal.textContent = '$' + grandtotal;