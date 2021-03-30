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