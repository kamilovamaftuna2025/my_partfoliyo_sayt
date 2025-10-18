
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
