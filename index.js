var cart = [];

function  getRandomInt() {
    return Math.floor(Math.random() * (100 + 1)) + 1;
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let anItem;
 anItem = Object.assign({}, {itemName: item, price: getRandomInt()})
 cart.push(anItem)
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
