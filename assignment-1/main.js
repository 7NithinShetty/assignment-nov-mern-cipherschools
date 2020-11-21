//-------------------Nav Bar starts------------------------------
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  if ($(window).width() >= 1024) {
    nav.classList.toggle("abtNav", window.scrollY > 660);
  } else {
    nav.classList.toggle("abtNav", window.scrollY > 780);
  }
});
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  if ($(window).width() >= 1024) {
    nav.classList.toggle("eduNav", window.scrollY > 1270);
  } else {
    nav.classList.toggle("eduNav", window.scrollY > 1790);
  }
});
//-------------------Nav Bar Ends--------------------------------

//-----------------------Hamburger Starts------------------------
const hamburger = document.querySelector(".toggle");
const navlinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navlinks.classList.toggle("active");
});
navlinks.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navlinks.classList.toggle("active");
});

const navs = document.querySelectorAll(".nav-links li");
hamburger.addEventListener("click", () => {
  navs.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7}s`;
    }
  });
});
//-----------------------Hamburger Ends------------------------