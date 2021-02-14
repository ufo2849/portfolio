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
})