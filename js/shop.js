// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
    let productoEncontrado = products.find((producto) => producto.id === id)
    let productoCart = cart.find((product) => product.id === id)
      if (productoCart) {
        productoCart.quantity += 1;
      } else {
        let nuevoProducto = {
          ...productoEncontrado,
          quantity : 1
        }
        cart.push(nuevoProducto);
      }
      calculateTotal()
}
// Exercise 2
function cleanCart() {
  cart.splice(0, cart.length);
  let cartList = document.getElementById('cart_list');
  cartList.innerHTML = "";
  total_price.innerHTML = ""
  console.log(cart)
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  applyPromotionsCart()
  total = 0;
  let total_price = document.getElementById("total_price")
  for (let product of cart) {
    let subtotal =  parseFloat(product.subtotalWithDiscount).toFixed(2)
    total += subtotal
  }
  total_price.innerHTML = parseFloat(total).toFixed(2)
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
  for (let product of cart){
    let discountPercentage = 0
    if (product.name === 'cooking oil' && product.quantity >= 3) {
      discountPercentage =  20
    } else if (product.name === 'Instant cupcake mixture' && product.quantity >= 10){
      discountPercentage = 30
    }

    if (discountPercentage > 0) {
      let discount = product.price * (discountPercentage / 100)
      product.subtotalWithDiscount =  ((product.price - discount) * product.quantity).toFixed(2);
    } else {
      product.subtotalWithDiscount = (product.price * product.quantity).toFixed(2);
    }
    console.log(product.subtotalWithDiscount)
  }
}


// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let cartList = document.getElementById("cart_list")
    cartList.innerHTML = ""
      for (item of cart){
        let row = `<tr>
        <th scope="row">${item.name}</th>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
        <td>${item.subtotalWithDiscount}</td>
        </tr>`;
        cartList.innerHTML += row;
      }
      calculateTotal()
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}
