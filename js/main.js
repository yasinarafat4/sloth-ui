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

// Client Section
const client_tabs = document.querySelectorAll(".client_tab_item");
const client_display_img = document.getElementById("client_main_img");

client_tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class
    client_tabs.forEach((item) => item.classList.remove("active"));

    // Add active class
    tab.classList.add("active");

    // Get image path
    const client_new_src = tab.getAttribute("data_image");

    // Transition for image swap
    client_display_img.style.opacity = "0";
    client_display_img.style.transform = "scale(0.98)";

    setTimeout(() => {
      client_display_img.src = client_new_src;
      client_display_img.style.opacity = "1";
      client_display_img.style.transform = "scale(1)";
    }, 250);
  });
});

//  Testimonial Section
const testimonials = [
  {
    name: "X_AE_A-13",
    role: "Product Designer, slothUI",
    content:
      "Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel urna at metus tempor mattis, or not, whatever.",
    rating: 4.5,
    image: "https://i.pravatar.cc/150?u=1",
  },
];

const grid = document.getElementById("testimonial-grid");

// "map" the data to HTML strings
grid.innerHTML = testimonials
  .map(
    (item) => `
  <div class="card">
    <div class="rating">
  ${[1, 2, 3, 4, 5]
    .map((starIndex) => {
      let starSrc = "";
      if (item.rating >= starIndex) {
        starSrc = "../assets/images/testimonials/star-filled.png";
      } else if (item.rating > starIndex - 1) {
        starSrc = "../assets/images/testimonials/star-half.png";
      } else {
        starSrc = "../assets/images/testimonials/star-empty.png";
      }

      return `<img src="${starSrc}" class="star_icon" alt="star rating">`;
    })
    .join("")}
</div>
    <p class="content">${item.content}</p>
    <div class="user">
      <img src="${item.image}" alt="${item.name}">
      <div class="info">
        <strong>${item.name}</strong>
        <span>${item.role}</span>
      </div>
    </div>
  </div>
`,
  )
  .join("");
