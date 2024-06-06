var mail;
document.getElementById("Log").onclick = function () {
  mail = document.getElementById("mail").value;
  if (mail.length === 3) {
    alert("invalid mail");
  } else if (!mail.includes("@")) {
    alert("invalid mail");
  }
};

const user = localStorage.getItem("user");
console.log(JSON.parse(user).name);
