import { navLinks, mobileMenuIcons, navIconDiv,  linkArray, bars, cross } from './elements.js'
import { waypointArray } from './waypoints'

function NavBar () {
  // define functions
  
  this.closeMenuOnWindowClick = (event) => {
    if (!event.target.closest('.header__nav')) {
      navLinks.classList.remove('header__nav-ul--active')
      cross.classList.add('header__nav-icon--hidden')
      bars.classList.remove('header__nav-icon--hidden')
    }
  }

  this.toggleMenu = () => {
    mobileMenuIcons.map(el => {
      el.classList.toggle('header__nav-icon--hidden')
    })
    navLinks.classList.toggle('header__nav-ul--active')
  }

  this.toggleActive = (waypoint) => {
    // takes a waypoint and will toggle the header__nav-ul--current class
    // to element that is linked to it via data-link
    let link = waypoint.element.getAttribute('data-link')
    document.getElementsByClassName(link)[0].classList.toggle('header__nav-ul--current')
  }

  this.scrollToId = (event) => {
    let data = event.target.getAttribute('data-link')
    let top = document.getElementById(data).offsetTop
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': top
    })
  }

  // IIFE adding event listners using DOMelements + functions
  (this.events = () => {
    navIconDiv.addEventListener('click', this.toggleMenu)
    window.addEventListener('click', (e) => this.closeMenuOnWindowClick(e))
    linkArray.map(el => el.addEventListener('click', (e) => this.scrollToId(e)))
    waypointArray.map(el => el(this.toggleActive))
  })()
}

export default NavBar
