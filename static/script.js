const navslide = () => {
    const burger = document.querySelector('.burger');
    console.log('working');
    const nav = document.querySelector('.onright');
    const nav1 = document.querySelector('.rightnav');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        nav1.classList.toggle('nav-active');
    }
    );
}

const app = () =>{
    navslide();
}

app();