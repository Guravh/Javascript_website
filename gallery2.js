// document.getElementById("add").onclick = function(){
//    prName=this.closest(".card-title");
//    console.log(this,prName);
// }
// document.querySelectorAll("#add").onclick = function() {
//     var prName = this.parentElement.querySelector(".card-title");
//     console.log(this);
//   }
//  const btn=document.querySelector("#add");
// // btn.onclick(()=>{
// //     alert("hello")
// // })
// console.log(btn);
// Get all the buttons with the "add" class

// var addButtons = document.querySelectorAll(".btn");

// // Attach a click event handler to each button
// addButtons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     var prName = this.parentElement.querySelector(".card-title");
//     var price = this.parentElement.querySelector(".card-text");
//     // console.log(prName.textContent, price.textContent);
//     const item = {
//       name: prName.textContent,
//       price: price.textContent,
//       quantity: 1,
//     };
//     if (cartItems.has(item.name)) {
//       const product = cartItems.get(item.name);
//       const quantity = product.quantity;
//       const itemNew = {
//         name: prName.textContent,
//         price: price.textContent,
//         quantity: quantity + 1,
//       };
//       cartItems.set(`${prName.textContent}`, itemNew);
//     } else {
//       cartItems.set(`${prName.textContent}`, item);
//     }
//     // localStorage.CART = JSON.stringify(Array.from(cartItems.entries()));
//     // localStorage.setItem = JSON.stringify(cartitems.item)
//     var mapArray = Array.from(cartItems);
//     localStorage.setItem("cartItems", JSON.stringify(mapArray));
//     console.log(cartItems);
//   });
// });


var prName;
var price;
const cartItems = new Map();
var addButtons = document.querySelectorAll(".btn");

// Attach a click event handler to each button
addButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var prName = this.parentElement.querySelector(".card-title").textContent;
    var price = this.parentElement.querySelector(".card-text").textContent;
    
    // Get the nearest image URL
    const imageElement = this.closest(".card").querySelector(".card-img-top");
    if (imageElement) {
      const imageURL = imageElement.getAttribute("src");
      const item = {
        pic: imageURL,
        product: prName,
        price: price,
        quantity: 1
      };

      if (cartItems.has(item.product)) {
        const existingItem = cartItems.get(item.product);
        existingItem.quantity += 1; // Increment the quantity of the existing item
        cartItems.set(item.product, existingItem); // Update the item in the map
      } else {
        cartItems.set(item.product, item);
      }
      console.log(cartItems);
      var mapArray = Array.from(cartItems);
      localStorage.setItem("cartItems", JSON.stringify(mapArray));
    } else {
      console.log("Image not found");
    }
  });
});

// const myObj = [{
//   name:"name",
//   price:"1231",
//   quantity:23
// }]

// const enter = myObj.entries()
// console.log(enter);
// document.getElementById("add").onclick=function(){
//     prName=document.querySelector("h5").innerHTML
//     console.log(prName);
// }
