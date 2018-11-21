
// Map will initialise the google map API
// if the screen size is less than resize parameter it will center the map on the logo/icon
// if it large than the resize parameter is will focus the center to the right of the map
// allowing the contact form to sit in front
function Map (resize = 740) {
  
  // variable to keep track of prev screen size
  let oldWidth = -1
  this.initMap = () => {
    let mapCenter = {
      lat: -41.2916185,
      lng: 174.8122418
    }
    let logoLocation = {
      lat: mapCenter.lat,
      lng: mapCenter.lng - 0.0311615 // moves the center to the right(so the logo sits to the left on a large screen)
    }

    if (window.innerWidth <= resize) {
      // if screen is less than the resize limit then center the map on top of the logo
      mapCenter.lng = logoLocation.lng
    }

    let map = new google.maps.Map(document.getElementById('map'), {
      center: mapCenter,
      zoom: 14
    })

    let marker1 = new google.maps.Marker({
      position: logoLocation,
      map: map,
      label: {
        fontFamily: "'Font Awesome 5 Free'",
        fontSize: '3rem',
        fontWeight: '900',
        text: '\uf053\uf441\uf054',
        color: 'rgb(49, 89, 119)'
      },
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 0.1
      },
      
    });
  }

  this.resizeMap = (e) =>{
    let newWidth = e.target.innerWidth

    if ((newWidth >= resize && oldWidth < resize) || (newWidth <= resize && oldWidth >= resize)) {
      this.initMap()
      oldWidth = newWidth
    }

  }



  (this.events = () => {
    const here = this
    document.addEventListener('DOMContentLoaded', this.initMap)
    window.addEventListener('resize', (event) => {this.resizeMap(event)})
  })()
}

export default Map
