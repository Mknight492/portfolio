import { contactInputs, contactBtn } from './elements'

function ContactForm () {
  // initialise DOM elements
  this.contactInputs = contactInputs

  // define functions

  this.addBorderOnText = (e) => {
    if (e.target.value != '') {
      e.srcElement.classList.add('contact__input--onfill')
    } else {
      e.target.classList.remove('contact__input--onfill')
    }
  }

  this.checkFormComplete = () => {
    const complete = this.contactInputs.reduce((acc, el) => {
      if (el.value != '' && acc !== false) {
        return true
      } else {
        return false
      }
    }, true)
    if (complete) {
      contactBtn.classList.remove('btn--disabled')
    } else {
      contactBtn.classList.add('btn--disabled')
    }
  }
  // IIFE adding event listners using DOMelements + functions

  (this.events = () => {
    this.contactInputs.map(el => {
      el.addEventListener('keyup', this.addBorderOnText)
      el.addEventListener('keyup', this.checkFormComplete)
    })
  })()
}

export default ContactForm
