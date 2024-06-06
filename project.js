// function handleNavigate(){
//     window.location.href ="http://127.0.0.1:5500/project/project.html/gallery1.html"
// }
//  home
const cartItems = new Map();

// try {
//   fetch("https://api.storerestapi.com/products")
//     .then((res) => res.json())
//     .then((data) => {
//       data.data.map((da) => {
//         console.log(da.title);
//       });
//     });
// } catch (error) {
//   console.log(error);
// }

const item = {
  name: "Shirt",
  price: 100,
};
const item2 = {
  name: "Jeans",
  price: 100,
};

cartItems.set("item1", item);
cartItems.set("item2", item2);

console.log(cartItems);
console.log(cartItems.size);

// console.log(cartItems.get("item1"));
cartItems.delete("item2");
console.log(cartItems.has("item2"));

// setTimeout(() => {
//   alert("yesss");
// }, 3000);

// login

// var item1 = {
//   name: "",
//   price: "",
// };

// var item3 = {
//   name: "",
//   price: "",
// };

const myCart = [];

const productName = "Shirt";
const price = 100;
const quantity = 1;

const itemToBeAdded = {
  name: productName,
  price: price,
  quantity: quantity,
};
const productName2 = "Jeans";
const price2 = 500;
const quantity2 = 1;

const itemToBeAdded2 = {
  name: productName2,
  price: price2,
  quantity: quantity2,
};

myCart.push(itemToBeAdded);
myCart.push(itemToBeAdded2);

// const cart = [
//   { name: "apple", price: "12" },
//   { name: "grapes", price: "45" },
//   { name: "kiwi", price: "34" },
// ];

myCart.map((cartitem) => {
  console.log(cartitem.name);
  console.log(cartitem.quantity);
  console.log(cartitem.price);
});