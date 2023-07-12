let section1 = document.querySelector(".section1");
let section2 = document.querySelector(".section2");
let section3 = document.querySelector(".section3");
let section4 = document.querySelector(".section4");
let section5 = document.querySelector(".section5");
let main = document.querySelector("main")
let body = document.querySelector("body")
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");
let s5 = document.getElementById("s5");

toggle.addEventListener("change", () => {
    section1.classList.toggle("dark");
    section2.classList.toggle("dark");
    section3.classList.toggle("dark");
    section4.classList.toggle("dark");
    section5.classList.toggle("dark");
    main.classList.toggle("dark");
    body.classList.toggle("dark");
    s5.style.color = "white";
    sunIcon.className =
    sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className =
    moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
});