const redSauce = document.getElementById("redSauce-image");
const redSauceInput = document.getElementById("redSauce");
const whiteSauce = document.getElementById("whiteSauce-image");
const whiteSauceCheckbox = document.getElementById("whiteSauceCheckbox");
const mozzarellaInput = document.getElementById("mozzarella")

redSauceInput.addEventListener('click',function(){
  if (redSauceInput.checked) {
    document.getElementById("redSauce-image").style.visibility = "visible";
    whiteSauce.style.visibility = "hidden";
  }
});

whiteSauceCheckbox.addEventListener('click',function(){
  if (whiteSauceCheckbox.checked) {
    document.getElementById("whiteSauce-image").style.visibility = "visible";
    redSauce.style.visibility = "hidden";
  }
});

function checkString(e) {
  if (this.checked) {
    document.getElementById(`${e.value}-image`).style.visibility = "visible";
  } else{
    document.getElementById(`${e.value}-image`).style.visibility = "hidden";
  }
}


mozzarellaInput.addEventListener('click', checkString(mozzarellaInput))

// mozzarellaInput.addEventListener('click', function(){
//   if (this.checked){
//     document.getElementById("mozzarella-image").style.visibility = "visible"
//   } else {
//     document.getElementById("mozzarella-image").style.visibility = "hidden"
//   }
// })



function isChecked(e) {
  if (e.checked) {
    document.getElementById(e.value + "-image").style.visibility = "visible";
  } else if (e.checked == false) {
    document.getElementById(e.value + "-image").style.visibility = "hidden";
  } else {
    document.getElementById(e.value + "-image").style.visibility = "hidden";
  }
}

var currentPriceElement = document.getElementById("currentPrice")

//Retrieve the current text value for price
function getCurrentPrice(){
  return Number(currentPriceElement.textContent);
}

//Change text of price element when function is called to two decimal places
function setCurrentPrice(price) {
  currentPriceElement.textContent = price.toFixed(2);
}

function onExtraCheeseChange(event) {
  var target = event.target;
  var price = getCurrentPrice();
  if (target.checked) {
    price += 5;
  } else {
    price -= 5;
  }
  setCurrentPrice(price)
}

function onToppingsChange(event) {
  var target = event.target;
  var price = getCurrentPrice();
  if (target.checked) {
    price += 1.8;
  } else {
    price -= 1.8;
  }
  setCurrentPrice(price)
}

function noSauce(e) {
  if (e.checked) {
    redSauce.style.visibility = "hidden";
    whiteSauce.style.visibility = "hidden";
    redSauce.checked = false;
    whiteSauceCheckbox.checked = false;


  } else {

  }
}
//Change the price of currentPrice text content when Extra Cheese is clicked
document.getElementById('extraCheese').addEventListener('change', onExtraCheeseChange);

var ingredientToppings = document.getElementsByClassName('toppingOptions')

//Iterate over array of checkboxes with the class toppingsOptions and add event listener to run each time a checkbox is clicked
for(var i = 0; i < ingredientToppings.length; i++) {
  ingredientToppings[i].addEventListener('change', onToppingsChange);
}
