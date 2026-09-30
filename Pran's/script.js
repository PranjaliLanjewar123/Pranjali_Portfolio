/* =====================================
   PORTFOLIO JAVASCRIPT
   Author: Pranjali Portfolio
===================================== */

// ================================
// Typing Effect
// ================================

const typingElement = document.querySelector(".typing");

const professions = [
    "Frontend Developer",
    "B.Sc Computer Science Student",
    "Web Designer",
    "UI/UX Enthusiast",
    "JavaScript Learner"
];

let professionIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const current = professions[professionIndex];

    if (!deleting) {

        typingElement.textContent =
            current.substring(0, letterIndex++);

        if (letterIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            current.substring(0, letterIndex--);

        if (letterIndex < 0) {

            deleting = false;

            professionIndex++;

            if (professionIndex >= professions.length) {

                professionIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 40 : 90);

}

typeEffect();


// ================================
// Dark Mode
// ================================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});


// ================================
// Mobile Menu
// ================================

const menuBtn = document.getElementById("menuBtn");

const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("showMenu");

});


// ================================
// Active Navigation
// ================================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ==
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// ================================
// Sticky Header
// ================================

window.addEventListener("scroll", () => {

    const header =
        document.querySelector("header");

    header.classList.toggle(
        "sticky",
        window.scrollY > 50
    );

});


// ================================
// Scroll Reveal Animation
// ================================

const revealElements =
    document.querySelectorAll(
        ".card,.project,.timeline-item,.about,.hero-left,.hero-right"
    );

function reveal() {

    revealElements.forEach(item => {

        const top =
            item.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (top < windowHeight - 100) {

            item.style.opacity = "1";

            item.style.transform =
                "translateY(0)";

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ================================
// Back To Top Button
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "25px";
topBtn.style.bottom = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#2563eb";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ================================
// Contact Form
// ================================

const form =
document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(
"Thank you for contacting me! I will get back to you soon."
);

    form.reset();

});


// ================================
// Image Hover
// ================================

const profile =
document.querySelector(".hero-right img");

profile.addEventListener("mouseenter",()=>{

    profile.style.transform =
    "scale(1.06) rotate(2deg)";

});

profile.addEventListener("mouseleave",()=>{

    profile.style.transform =
    "scale(1) rotate(0deg)";

});


// ================================
// Console Message
// ================================

console.log(
"%cWelcome to Pranjali's Portfolio 🚀",
"color:#2563eb;font-size:18px;font-weight:bold;"
);

/* =====================
AUTO IMAGE & VIDEO SLIDER
====================== */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide(){

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    slides[currentSlide].classList.add("active");

}

setInterval(changeSlide,4000);