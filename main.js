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
    else {
        console.log(event.target.dataset.link);
    }
    const scrollTo= document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
});