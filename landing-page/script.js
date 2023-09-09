const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-bar");
const hlines = document.querySelectorAll(".hamburger .h-line");
hamburger.addEventListener("click", () => {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  } else {
    navbar.classList.add("active");
  }

  if (hamburger.classList.contains("active")) {
    hamburger.classList.remove("active");
  } else {
    hamburger.classList.add("active");
  }

  hlines.forEach((line) => {
    if (line.classList.contains("active")) {
      line.classList.remove("active");
    } else {
      line.classList.add("active");
    }
  });
});
