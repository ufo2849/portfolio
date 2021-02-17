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

// Show arrow up btn when scrolling down
const arrowup= document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > (homeHeight/2)) {
        arrowup.classList.add('visible');
    }
    else {
        arrowup.classList.remove('visible');
    }
});

// Handle click on the arrow up btn
arrowup.addEventListener('click', () => {
    scrollIntoView('#home');
});

// Projects filter
const Workbtncontainer= document.querySelector('.work__categories');
const Projectcontainer= document.querySelector('.work__projects');
const projects= document.querySelectorAll('.project');
Workbtncontainer.addEventListener('click', (event) => {
    const filter= event.target.dataset.filter || event.target.parentNode.dataset.filter;
    if (filter == null) {
        return ;
    }

    // remove selection from previous and select new one
    const active= document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target= event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
    target.classList.add('selected');

    Projectcontainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
            if (filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            }
            else {
                project.classList.add('invisible');
            }
        });
        Projectcontainer.classList.remove('anim-out');
    }, 300);
});

function scrollIntoView(selector) {
    const scrollTo= document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}