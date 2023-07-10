const preloader = document.querySelector(".preloader");
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    preloader.classList.add("hide");

    return clearTimeout(this);
  }, 10);
});