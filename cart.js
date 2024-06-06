// // const cartItems = new Map(JSON.parse(localStorage.CART));

// // cartItems.forEach((value, key)=>{
// //     console.log(key);
// //     console.log(value);
// // })
// // localStorage.setItem("cartItems", JSON.stringify(mapArray));

// // var cartItemsJSON = localStorage.getItem("cartItems");

// // if (cartItemsJSON) {
// //   var cartItems = new Map(JSON.parse(cartItemsJSON));
// //   console.log(cartItems);
// // } else {
// //   console.log("Cart is empty");
// // }

// // Retrieve cart items from local storage
// var cartItemsJSON = localStorage.getItem("cartItems");
// if (cartItemsJSON) {
//   var cartItems = new Map(JSON.parse(cartItemsJSON));
//   populateCartTable(cartItems);
// } else {
//   console.log("Cart is empty");
// }

// // Function to populate the cart table
// function populateCartTable(cartItems) {
//   var tableBody = document.getElementById("cartTableBody");
//   tableBody.innerHTML = ""; // Clear the table body before populating

//   cartItems.forEach(function (item) {
//     var row = document.createElement("tr");

//     // Image (first td)
//     var imageCell = document.createElement("td");
//     var image = document.createElement("img");
//     image.src = item.pic;
//     imageCell.appendChild(image);
//     row.appendChild(imageCell);

//     // Product (second td)
//     var productCell = document.createElement("td");
//     productCell.textContent = item.product;
//     row.appendChild(productCell);

//     // Quantity (third td)
//     var quantityCell = document.createElement("td");
//     var increaseButton = document.createElement("button");
//     increaseButton.textContent = "+";
//     var decreaseButton = document.createElement("button");
//     decreaseButton.textContent = "-";
//     var quantityText = document.createElement("span");
//     quantityText.textContent = item.quantity;

//     decreaseButton.addEventListener("click", function () {
//         if (item.quantity > 1) {
//           item.quantity -= 1; // Corrected decrement syntax
//           quantityText.textContent = item.quantity;
//           updateCartItems(cartItems);
//         } else {
//           // If quantity is 1, remove the item from the cart
//           cartItems.delete(item.product);
//           row.remove();
//           updateCartItems(cartItems);
//         }
      
//         // Update the total price when quantity changes
//         updateTotalPrice(cartItems);
//       });
      
//       increaseButton.addEventListener("click", function () {
//         item.quantity += 1; // Corrected increment syntax
//         quantityText.textContent = item.quantity;
//         updateCartItems(cartItems);
      
//         // Update the total price when quantity changes
//         updateTotalPrice(cartItems);
//       });
      

//     quantityCell.appendChild(increaseButton);
//     quantityCell.appendChild(quantityText);
//     quantityCell.appendChild(decreaseButton);
//     row.appendChild(quantityCell);

//     // Price (fourth td)
//     var priceCell = document.createElement("td");
//     priceCell.textContent = item.price;
//     row.appendChild(priceCell);

//     tableBody.appendChild(row);

//     // Function to update the total price
//     function updateTotalPrice(cartItems) {
//       var totalPrice = 0;
//       cartItems.forEach(function (item) {
//         var itemPrice = parseFloat(item.price.replace("$", "")); // Convert price to a number
//         totalPrice += itemPrice * item.quantity;
//       });

//       // Display the total price
//       var totalPriceElement = document.querySelector(".total-price");
//       totalPriceElement.textContent = "$" + totalPrice.toFixed(2); // Format as currency with two decimal places
//     }
//   });
// }

// // Function to update cart items in local storage
// function updateCartItems(cartItems) {
//   var mapArray = Array.from(cartItems);
//   localStorage.setItem("cartItems", JSON.stringify(mapArray));
// }
// Retrieve cart items from local storage
var cartItemsJSON = localStorage.getItem("cartItems");
if (cartItemsJSON) {
  var cartItems = new Map(JSON.parse(cartItemsJSON));
  populateCartTable(cartItems);
} else {
  console.log("Cart is empty");
}

// Function to populate the cart table
function populateCartTable(cartItems) {
  var tableBody = document.getElementById("cartTableBody");
  tableBody.innerHTML = ""; // Clear the table body before populating

  cartItems.forEach(function (item) {
    var row = document.createElement("tr");

    // Image (first td)
    var imageCell = document.createElement("td");
    var image = document.createElement("img");
    image.src = item.pic;
    image.style.height = "10vh"; 
    imageCell.appendChild(image);
    row.appendChild(imageCell);

    // Product (second td)
    var productCell = document.createElement("td");
    productCell.textContent = item.product;
    row.appendChild(productCell);

    // Quantity (third td)
    var quantityCell = document.createElement("td");
    var increaseButton = document.createElement("button");
    increaseButton.textContent = "+";
    increaseButton.classList.add("quantity-button");
    var decreaseButton = document.createElement("button");
    decreaseButton.textContent = "-";
    decreaseButton.classList.add("quantity-button");
    var quantityText = document.createElement("span");
    quantityText.textContent = item.quantity;

    decreaseButton.addEventListener("click", function () {
      if (item.quantity > 1) {
        item.quantity -= 1; // Corrected decrement syntax
        quantityText.textContent = item.quantity;
        updateCartItems(cartItems);
      } else {
        // If quantity is 1, remove the item from the cart
        cartItems.delete(item.product);
        row.remove();
        updateCartItems(cartItems);
      }

      // Update the total price when quantity changes
      updateTotalPrice(cartItems);
    });

    increaseButton.addEventListener("click", function () {
      item.quantity += 1; // Corrected increment syntax
      quantityText.textContent = item.quantity;
      updateCartItems(cartItems);

      // Update the total price when quantity changes
      updateTotalPrice(cartItems);
    });

    quantityCell.appendChild(increaseButton);
    quantityCell.appendChild(quantityText);
    quantityCell.appendChild(decreaseButton);
    row.appendChild(quantityCell);

    // Price (fourth td)
    var priceCell = document.createElement("td");
    priceCell.textContent = item.price;
    row.appendChild(priceCell);

    tableBody.appendChild(row);

    // Function to update the total price
    function updateTotalPrice(cartItems) {
      var totalPrice = 0;
      cartItems.forEach(function (item) {
        var itemPrice = parseFloat(item.price.replace("$", "")); // Convert price to a number
        totalPrice += itemPrice * item.quantity;
      });

      // Display the total price
      var totalPriceElement = document.querySelector(".total-price");
      totalPriceElement.textContent = "$" + totalPrice.toFixed(2); // Format as currency with two decimal places
    }
  });
}

// Function to update cart items in local storage
function updateCartItems(cartItems) {
  var mapArray = Array.from(cartItems);
  localStorage.setItem("cartItems", JSON.stringify(mapArray));
}

