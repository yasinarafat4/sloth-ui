//    1. Select DOM Elements

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const header = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav a");

// Toggle the 'active' class when menu is clicked
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Close the mobile menu automatically when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// Toggle shadow on header when user scrolls down
window.addEventListener("scroll", () => {
  const isScrolled = window.scrollY > 20;
  header.classList.toggle("scrolled", isScrolled);
});