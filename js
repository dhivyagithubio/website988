// Show welcome message on page load
window.addEventListener("load", function () {
  alert("Welcome to Brew Haven Coffee ☕!");
});

// Back to Top Button
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "↑ Top";
backToTopBtn.style.position = "fixed";
backToTopBtn.style.bottom = "20px";
backToTopBtn.style.right = "20px";
backToTopBtn.style.padding = "10px 15px";
backToTopBtn.style.background = "#6f4e37";
backToTopBtn.style.color = "white";
backToTopBtn.style.border = "none";
backToTopBtn.style.borderRadius = "5px";
backToTopBtn.style.cursor = "pointer";
backToTopBtn.style.display = "none";
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Dark Mode Toggle
const darkModeToggle = document.createElement("button");
darkModeToggle.innerText = "🌙 Dark Mode";
darkModeToggle.style.position = "fixed";
darkModeToggle.style.top = "20px";
darkModeToggle.style.right = "20px";
darkModeToggle.style.padding = "8px 12px";
darkModeToggle.style.background = "#4b2e2e";
darkModeToggle.style.color = "white";
darkModeToggle.style.border = "none";
darkModeToggle.style.borderRadius = "5px";
darkModeToggle.style.cursor = "pointer";
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
