import { navLinks, mobileMenuIcons, navIconDiv } from './elements.js'

function MobileMenu () {
  // initialise DOM elements
  this.navIconDiv = navIconDiv
  this.navLinks = navLinks
  this.mobileMenuIcons = Array.from(mobileMenuIcons)
  console.log(mobileMenuIcons)
  // define functions

  this.toggleMenu = () => {
    this.mobileMenuIcons.map(el => {
      el.classList.toggle('header__nav__icon--hidden')
      console.log('action')
    })
    this.navLinks.classList.toggle('header__nav__ul--active')
  }

  // IIFE adding event listners using DOMelements + functions

  (this.events = () => {
    this.navIconDiv.addEventListener('click', this.toggleMenu)
  })()
}

export default MobileMenu
