// Header, parallax moon
var rellax = new Rellax('.rellax');

const navbar = document.querySelector(".navbar");
const a = navbar.querySelectorAll("a");

a.forEach(item => {
    item.addEventListener("click", () => {
        for (let i = 0; i < a.length; i++) {
            a[i].classList.remove("active");
        }
        item.classList.add("active");
    })
})