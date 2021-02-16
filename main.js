'use strict'

//  Transparent navbar at the top
const navbar= document.querySelector('#navbar');
const navbarheight= navbar.getBoundingClientRect().height

document.addEventListener('scroll', ()=> {
    if (window.scrollY > navbarheight) {
        navbar.classList.add('navbar--dark');
    }
    else {
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapped on navbar
const navbarmenu= document.querySelector('.navbar__menu');
navbarmenu.addEventListener('click', (event) => {
    const target= event.target;
    const link= target.dataset.link;
    if (link == null) {
        return;
    }
    
    scrollIntoView(link);
});

// Scrolling when tapped 'contact me' on home
const homebtn= document.querySelector('.home__contact');
homebtn.addEventListener('click', () => {
    scrollIntoView('#contact');
})

// Make home fade to transparent as scrolling down
const home= document.querySelector('.home__part');
const homeHeight= home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY/homeHeight;
});


function scrollIntoView(selector) {
    const scrollTo= document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}