const hamburger = document.querySelector(".burger");
const navLinks = document.querySelector(".mainNavList");
const links = document.querySelectorAll(".mainNavList li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});