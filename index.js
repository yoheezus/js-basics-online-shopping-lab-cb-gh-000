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
 var anItem = generateCartItem(item);
 cart.push(anItem);
 return `${anItem["itemName"]} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (!cart.length) {
      return "Your shopping cart is empty."
  } else if (cart.length === 1) {
      let oneItem = cart[0]
      return `In your cart, you have ${oneItem.itemName} at \$${oneItem.itemPrice}.`
  } else if (cart.length === 2) {
      return `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}, and ${cart[1].itemName} at \$${cart[1].itemPrice}.`
  } else {
      return formatListOfThree()
  }
}

function total() {
  // write your code here
  var total = 0;
  for (let i = 0, l = getCart().length; i < l; i++) {
      total += getCart()[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var editableCart;
  for (let i = 0, l = getCart().length; i < l; i++) {
      if (item === getCart()[i].itemName) {
          editableCart = getCart()[i];
      }
  }
  return "That item is not in your cart."
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

function formatListOfThree() {
    let lastItem = getCart().slice(-1)[0]
    let withoutLastItem = getCart().slice(0, cart.length - 1)
    var formattedArray = []
    for (let i = 0, l = withoutLastItem.length; i < l; i++) {
        formattedArray.push(`${withoutLastItem[i].itemName} at \$${withoutLastItem[i].itemPrice}`)
    }
    return `In your cart, you have ${formattedArray.join(", ")}, and ${lastItem.itemName} at \$${lastItem.itemPrice}.`
}
