const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.onright');
    const nav1 = document.querySelector('.rightnav');
    const nav2 = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.onright li');

    // mobile toggle
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        nav1.classList.toggle('nav-active');
        nav2.classList.toggle('nav-active');


        //animation for links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 9 + 0.5}s`;
            }
        });
        // burger button animation
        burger.classList.toggle("toggle");

    }
    );

}

const app = () =>{
    navslide();
}

app();


function plusDivs(n) {
    showDivs(slideIndex += n);
    }

function currentDiv(n) {
    showDivs(slideIndex = n);
    }

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slideimage");
    var dots = document.getElementsByClassName("bannerbuttons");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("whitefill", "");
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " whitefill";

    if(slideIndex == 2){
        document.querySelector(".imagelogo").style.backgroundColor = "rgba(0, 0, 0, 0.411)";
    }
    else{
        document.querySelector(".imagelogo").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}

var slideIndex = 1;
showDivs(slideIndex);

document.addEventListener('DOMContentLoaded', ()=>{

    // banner slideshow


})