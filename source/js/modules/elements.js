
// ---------
//  nav bar
// --------- 
export const mobileMenuIcons = Array.from(document.getElementsByClassName('header__nav-icon'))
export const navLinks = document.querySelector('.header__nav-ul')
export const navIconDiv = document.querySelector('.header__nav-icon-div')
export const navPrimary = document.querySelector('.header__nav')
export const bars = document.getElementsByClassName('bars')[0]
export const cross = document.getElementsByClassName('cross')[0]


// ---------
//  contact form
// --------- 
export const contactInputs = Array.from(document.getElementsByClassName('contact__input'))
export const contactBtn = document.querySelector('.contact__btn')

// ---------
//  waypoints
// --------- 

export const homeLink = document.querySelector('.home--link')
export const projectsLink = document.querySelector('.projects--link')
export const skillsLink = document.querySelector('.skills--link')
export const contactLink = document.querySelector('.contact--link')


export const homeSection = document.getElementById('home')
export const projectsSection = document.getElementById('projects')
export const skillsSection = document.getElementById('skills')
export const contactSection = document.getElementById('contact')

// array of all links
export const linkArray = Array.from(document.querySelectorAll('.link'))
// array of all sections
export const sectionArray = Array.from(document.querySelectorAll('.js-waypoint'))

