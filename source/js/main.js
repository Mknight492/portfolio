import { testFunction } from './modules/console'
import NavBar from './modules/nav-bar'
import Map from './modules/map'
import ContactForm from './modules/contact-form'



const navBar= new NavBar()
const map = new Map()
const contactForm = new ContactForm()
testFunction()

if (process.env.NODE_ENV === "development") {
  module.hot.accept()
}
