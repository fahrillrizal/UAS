//navbar
document.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("navbar-scrolled", window.scrollY > 0);
});

//btn-to-top
let mybutton = document.getElementById("btn-top");
window.onload = function() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.style.scrollBehavior = "smooth";
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    setTimeout(function() {
        document.body.style.scrollBehavior = "auto";
        document.documentElement.style.scrollBehavior = "auto";
    }, 1000);
}
//btn to content
document.getElementById("just").addEventListener("click", function() {
const targetElement = document.getElementById("fyp");

if (targetElement) {
    scrollToSmoothly(targetElement.offsetTop, 1000);
}
});

function scrollToSmoothly(targetPosition, duration) {
const startPosition = window.scrollY || window.pageYOffset;
const distance = targetPosition - startPosition;
const startTime = performance.now();

function step(currentTime) {
    const elapsedTime = currentTime - startTime;
    const scrollPosition = easeInOutCubic(elapsedTime, startPosition, distance, duration);
    window.scrollTo(0, scrollPosition);

    if (elapsedTime < duration) {
        requestAnimationFrame(step);
    }
}

function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
}

requestAnimationFrame(step);
}