const menuBtn = document.getElementById("mobile-menu-btn");
const mobileNav = document.getElementById("mobile-nav");

menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
});

document.querySelectorAll("#mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
    });
});