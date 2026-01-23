// Navbar Toggle 

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

// Statistics Section Counter
const observerOptions = {
  threshold: 0.5,
};

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounter(entry.target);
      observer.unobserve(entry.target); 
    }
  });
}, observerOptions);

function startCounter(el) {
  const target = parseFloat(el.getAttribute("data-target"));
  const suffix = el.getAttribute("data-suffix") || "";
  const decimals = parseInt(el.getAttribute("data-decimals")) || 0;
  const duration = 2000;
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);
  let currentFrame = 0;

  const animate = () => {
    currentFrame++;
    const progress = currentFrame / totalFrames;
    const currentVal = target * (progress * (2 - progress));

    el.innerText = currentVal.toFixed(decimals) + suffix;

    if (currentFrame < totalFrames) {
      requestAnimationFrame(animate);
    } else {
      el.innerText = target.toFixed(decimals) + suffix;
    }
  };

  requestAnimationFrame(animate);
}

document.querySelectorAll(".counter").forEach((counter) => {
  counterObserver.observe(counter);
});
