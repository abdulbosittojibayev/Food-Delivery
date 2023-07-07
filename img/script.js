const preloader = document.querySelector(".preloader");
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    preloader.classList.add("hide");

    return clearTimeout(this);
  }, 1000);
});
// Navigation Bar
const navbarToggle = document.querySelector('.navbar-toggle');
constnavbarCollapse = document.querySelector('.navbar-collapse');
const menuOpen = document.getElementById('menu-open');

navbarToggle.addEventListener('click', function() {
  navbarCollapse.classList.toggle('show');
});

menuOpen.addEventListener('click', function() {
  if (menuOpen.checked) {
    navbarCollapse.classList.add('show');
  } else {
    navbarCollapse.classList.remove('show');
  }
});