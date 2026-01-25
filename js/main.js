// Navbar Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const header = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav a");

// Toggle the 'active' Class
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Close the Mobile Menu
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// Toggle Shadow on Header
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
    client_tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    const client_new_src = tab.getAttribute("data_image");

    // Transition for Image
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
    rating: 5,
    image: "../assets/images/testimonials/avatar-1.png",
  },
  {
    name: "Azunyan U. Wu",
    role: "CEO, nextlife.ai",
    content:
      "Posuere urna nec tincidunt praesent semper feugiat nibh sed. Velit dignissim sodales ut eu.",
    rating: 3.5,
    image: "../assets/images/testimonials/avatar-2.png",
  },
  {
    name: "Mechatronics Yi",
    role: "CTO, fin4win.ai",
    content:
      "Sit amet est placerat in. Blandit cursus risus at ultrices mi tempus imperdiet. Volutpat commodo sed egestas egestas fringilla phasellus. Tincidunt eget nullam non nisi.",
    rating: 4,
    image: "../assets/images/testimonials/avatar-3.png",
  },
  {
    name: "Oarack Babama",
    role: "Former President of US",
    content:
      "Nisi porta lorem mollis aliquam ut porttitor leo. Sed odio morbi quis commodo. Arcu non odio euismod lacinia at quis. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae.",
    rating: 5,
    image: "../assets/images/testimonials/avatar-4.png",
  },
  {
    name: "Saylor Twift",
    role: "Famous Singer",
    content:
      "Accumsan tortor posuere ac ut consequat. Quis varius quam quisque id diam vel. Commodo odio aenean sed adipiscing diam donec adipiscing. Vel pharetra vel turpis nunc eget.",
    rating: 4.5,
    image: "../assets/images/testimonials/avatar-5.png",
  },
  {
    name: "Asuna Yuuki",
    role: "Virtual Swordsman",
    content:
      "Venenatis cras sed felis eget velit aliquet. Velit scelerisque in dictum non consectetur. Felis eget velit aliquet sagittis. Ultricies integer quis auctor elit sed vulputate mi. ",
    rating: 4.5,
    image: "../assets/images/testimonials/avatar-6.png",
  },
  {
    name: "Boe Jiden",
    role: "Former President Of Canada",
    content:
      "Sagittis eu volutpat odio facilisis mauris sit amet massa. Urna et pharetra pharetra massa.",
    rating: 2.5,
    image: "../assets/images/testimonials/avatar-7.png",
  },
  {
    name: "Vermillion D. Gray",
    role: "CEO, hacklife.ai",
    content:
      "Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Nec nam aliquam sem et tortor consequat id porta nibh. Viverra suspendisse. Lacus sed viverra tellus in hac habitasse platea dictumst. Elit at imperdiet dui accumsan.",
    rating: 5,
    image: "../assets/images/testimonials/avatar-8.png",
  },
  {
    name: "Zuckman Wu",
    role: "CEO, tech4life.ai",
    content:
      "Viverra accumsan in nisl nisi scelerisque eu. Vitae congue eu consequat ac felis donec.",
    rating: 4,
    image: "../assets/images/testimonials/avatar-9.png",
  },
];

const grid = document.getElementById("testimonial-grid");

// "map" the data
grid.innerHTML = testimonials
  .map(
    (item) => `
  <div class="testimonial-card">
    <div class="rating">
  ${[1, 2, 3, 4, 5]
    .map((starIndex) => {
      let starSrc = "";
      if (item.rating >= starIndex) {
        starSrc = "../assets/icons/testimonials/star-filled-icon.svg";
      } else if (item.rating > starIndex - 1) {
        starSrc = "../assets/icons/testimonials/star-half-icon.svg";
      } else {
        starSrc = "../assets/icons/testimonials/star-empty-icon.svg";
      }

      return `<img src="${starSrc}" class="star_icon" alt="star rating">`;
    })
    .join("")}
</div>
    <p class="content">${item.content}</p>
    <div class="user">
      <img src="${item.image}" alt="${item.name}">
      <div class="info">
        <h3>${item.name}</h3>
        <p>${item.role}</p>
      </div>
    </div>
  </div>
`,
  )
  .join("");

// FAQ Section
const faqItems = document.querySelectorAll(".faq_item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq_question");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Close other items
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
        otherItem.querySelector(".faq_answer").style.maxHeight = null;
      }
    });

    // Toggle current item
    if (!isActive) {
      item.classList.add("active");
      const answer = item.querySelector(".faq_answer");
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      item.classList.remove("active");
      item.querySelector(".faq_answer").style.maxHeight = null;
    }
  });
});

// Footer Section Scroll to Top
const scroll_top_btn = document.querySelector(".scroll_top");

// Show/Hide button
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scroll_top_btn.style.opacity = "1";
    scroll_top_btn.style.pointerEvents = "auto";
  } else {
    scroll_top_btn.style.opacity = "0";
    scroll_top_btn.style.pointerEvents = "none";
  }
});

// Smooth Scroll
scroll_top_btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
