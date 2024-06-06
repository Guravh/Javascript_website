// var prName;
// var price;
// const map=new Map();
// var addButtons = document.querySelectorAll(".btn");

// // Attach a click event handler to each button
// addButtons.forEach(function(button) {
//   button.addEventListener("click", function(event) {
//     var clickedButton = event.target;
//     var prName = this.parentElement.querySelector(".card-title");
//     var price = this.parentElement.querySelector(".card-text")
//     // console.log(prName.textContent,price.textContent);

//     const item = {
//       product : prName,
//       price : price,
//       quantity : 1
//     }
//     map.set(item.product,item);
//     if(map.has(item.product))
//     {
//       const exist=map.get(item.product,item)
//       exist.quantity += 1;
//       map.set(item.product,exist)
//     }
//     else{
//       map.set(item.product,item)
//     }
//     console.log(map);
//   });
// });

// correct code


// var prName;
// var price;
// const cartItems = new Map();
// var addButtons = document.querySelectorAll(".btn");

// // Attach a click event handler to each button
// addButtons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     var prName = this.parentElement.querySelector(".card-title").textContent;
//     var price = this.parentElement.querySelector(".card-text").textContent;
//     // var image = document.querySelector("img").getAttribute("src");
//      // var image=this.parentElement.querySelector("img").getAttribute("src");
//      const imageElement = button.closest(".card").querySelector(".card-img-top");

//      if (imageElement) {
//          // Access the image's source (src) attribute
//          const imageURL = imageElement.getAttribute("src");
//          console.log("Image URL:", imageURL);
//      } else {
//          console.log("Image not found");
//      }
//     const item = {
//       pic: imageURL,
//       product: prName,
//       price: price,
//       quantity: 1
//     };

//     if (cartItems.has(item.product)) {
//       const existingItem = cartItems.get(item.product);
//       existingItem.quantity += 1; // Increment the quantity of the existing item
//       cartItems.set(item.product, existingItem); // Update the item in the map
//     } else {
//       cartItems.set(item.product, item);
//     }
//     console.log(cartItems);
//     var mapArray = Array.from(cartItems);
//     localStorage.setItem("cartItems", JSON.stringify(mapArray));
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
