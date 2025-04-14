//SCROLL TO SECTION BOOKING
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

// NAV LOGO RNL SWITCH ANIMATION
document.getElementById("toggle-rnl").addEventListener("click", function () {
  this.classList.toggle("clicked");

  const nav = document.querySelector("nav");
  document.querySelector("nav").classList.toggle("show");
});

//
// MENU BUTTOONS HOVER ANIMATION
document.querySelectorAll(".menu-buttons button").forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty("--x", `${x}px`);
    button.style.setProperty("--y", `${y}px`);
  });

  button.addEventListener("mouseleave", () => {
    setTimeout(() => {
      button.style.setProperty("--x", "50%");
      button.style.setProperty("--y", "50%");
    }, 400);
  });
});

//
//SWITCH MENUES ON BUTTON CLICKS
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".menu-buttons button");
  const menus = document.querySelectorAll(".popular-food.catalog");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      menus.forEach((menu) => menu.removeAttribute("id"));

      menus[index].id = "catalog-active";
      buttons.forEach((btn) => (btn.id = ""));
      button.id = "active-btn";
    });
  });
  buttons[0].id = "active-btn";
  menus[0].id = "catalog-active";
});

//
// SHOW VIDEO ON PRESS PLAY
const modal = document.querySelector(".circle");
const video = document.querySelector(".video-iframe");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".button-close-video");

function hideVideo() {
  video.classList.add("v-hidden");
  overlay.classList.add("v-hidden");
}

modal.addEventListener("click", function () {
  video.classList.remove("v-hidden");
  overlay.classList.remove("v-hidden");
});

[btnClose, overlay].forEach((element) => element.addEventListener("click", hideVideo));
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    hideVideo();
  }
});

//
// SHOW ITEMS ON LOAD
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".our-vision, .time-is-money");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("item-show");
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => observer.observe(section));
});
//MENU
document.addEventListener("DOMContentLoaded", function () {
  const target = document.querySelector(".our-menu-t");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.4) {
          target.classList.add("o-m-t-visible");
        }
      });
    },
    { threshold: [0.4] }
  );

  observer.observe(target);
});

// window.addEventListener("load", function () {
//   // Hide the loading animation
//   const loading = document.getElementById("loading");
//   loading.style.display = "none";
// });
// window.addEventListener("load", function () {
//   // Wait for all images to load
//   const images = document.querySelectorAll("img");
//   let totalImages = images.length;
//   let imagesLoaded = 0;

//   if (totalImages === 0) {
//     // If there are no images, hide the loader immediately
//     document.getElementById("loading").style.display = "none";
//     return;
//   }

//   images.forEach((img) => {
//     img.addEventListener("load", () => {
//       imagesLoaded++;
//       if (imagesLoaded === totalImages) {
//         // All images are loaded, hide the loader
//         document.getElementById("loading").style.display = "none";
//       }
//     });

//     // Handle images that fail to load
//     img.addEventListener("error", () => {
//       imagesLoaded++;
//       if (imagesLoaded === totalImages) {
//         document.getElementById("loading").style.display = "none";
//       }
//     });
//   });
// });
