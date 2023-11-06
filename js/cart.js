const addProduct = () => {
     const productField = document.getElementById("product-name");
     const quantityField = document.getElementById("quantity-name");
     const product = productField.value;
     const quantity = quantityField.value;
     productField.value = '';
     quantityField.value = '';
     console.log(product, quantity);
     displayAll(product, quantity);
     saveProductToLocalStorage(product, quantity)
}
const displayAll = (product, quantity) => {
     const ul = document.getElementById('ul-field');
     const li = document.createElement('li');
     li.innerText = `${product} : ${quantity}`
     ul.appendChild(li);
}
const getStoredShoppingCart = () => {
     let cart = {};
     const storedCart = localStorage.getItem('cart');
     if (storedCart) {
          cart = JSON.parse(storedCart);
     }
     return cart;
}
const saveProductToLocalStorage = (product, quantity) => {
     const cart = getStoredShoppingCart();
     cart[product] = quantity;
     const cartStringify = JSON.stringify(cart);
     localStorage.setItem('cart', cartStringify);
}

const displayProductFromLocalStorage = () => {
     const savedCart = getStoredShoppingCart();
     console.log(savedCart);
     for (const product in savedCart) {

          quantity = savedCart[product];
          console.log(product, quantity);
          displayAll(product, quantity);
     }
}
displayProductFromLocalStorage();