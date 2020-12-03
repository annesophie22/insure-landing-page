const navToggleOpen = document.querySelector(".nav-toggle-toopen");
const navToggleClose = document.querySelector(".nav-toggle-toclose");
const nav = document.querySelector(".nav");

navToggleOpen.addEventListener("click",()=>{
    navToggleOpen.classList.toggle("nav-toggle-toopen-inactive");
    navToggleClose.classList.toggle("nav-toggle-toclose-active");
    nav.classList.toggle("nav-visible");
});

navToggleClose.addEventListener("click",()=>{
    navToggleOpen.classList.remove("nav-toggle-toopen-inactive");
    navToggleClose.classList.remove("nav-toggle-toclose-active");
    nav.classList.remove("nav-visible");
});

