const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

 // Open modal
  document.getElementById("signupBtn").onclick = function () {
    document.getElementById("signupModal").style.display = "block";
  };

  // Close modal
  document.querySelector(".modal .close").onclick = function () {
    document.getElementById("signupModal").style.display = "none";
  };

  // Close if user clicks outside modal
  window.onclick = function (event) {
    const modal = document.getElementById("signupModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Handle form submission
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;

  fetch("https://script.google.com/macros/s/AKfycbyWsc5o451Aw0x_HqQjcQxowBsgOsWWhEhzLvqQYCsEvk4N9LrgXgONV4nUWErwg4jm3g/exec", {
    method: "POST",
    mode: "no-cors", // prevents CORS errors
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ name, email })
  });

  alert("Thanks for signing up!");
  e.target.reset();
  document.getElementById("signupModal").style.display = "none";
});
