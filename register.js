var Name;
var lastName;
var mail;
document.getElementById("reg").onclick = function () {
  lastName = document.getElementById("Last").value;
  Name = document.getElementById("Name").value;
  mail = document.getElementById("mail").value;
  console.log(Name, mail);
  if (mail.length === 0 && Name.length === 0 && lastName.length === 0) {
    alert("Enter proper details");
  } else if (mail.length === 0) {
    alert("invalid mail");
  } else if (Name.length === 0) {
    alert("Enter your Name");
  } else if (lastName.length === 0) {
    alert("Include Your LastName");
  } else if (!mail.includes("@")) {
    alert("invalid mail");
  } else if (Name.length < 2) {
    alert("Enter proper details");
  } else if (lastName.length < 2) {
    alert("Enter proper details");
  }
};

// localStorage.setItem("user", JSON.stringify({ name: "user@email.com" }));
// var cartitem=localStorage.getItem("item")
