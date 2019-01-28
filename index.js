var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var anItem;
 var randInt = getRandomInt();
 anItem = Object.assign({}, {"itemName": item, "price": Math.floor(Math.random() * (100 + 1)) + 1});
 cart.push(anItem);
 return `${anItem["itemName"]} has been added to your cart.`
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

// helper functions (looked at solution)
function  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateCartItem(itemName) {
    return {
        itemName: itemName,
        itemPrice: getRandomInt(1, 100)
    };
}
