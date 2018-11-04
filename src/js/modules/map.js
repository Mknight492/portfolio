
// Map will initialise the google map API
// if the screen size is less than resize parameter it will center the map on the logo/icon
// if it large than the resize parameter is will focus the center to the right of the map
// allowing the contact form to sit in front
function Map (resize = 740) {

  // variable to keep track of prev screen size
  let oldWidth = -1
  this.initMap = () => {
    let mapCenter = {}

    if (window.innerWidth >= resize) {
      // screen greater than resize and map center should be to the right of the logo
      mapCenter.lat = -41.2942303
      mapCenter.lng = 174.8270504
    } else {
      // screen is less than resize and map center should be on the logo
      mapCenter.lat = -41.2942303
      mapCenter.lng = 174.7958889
    }

    let logoLocation = {
      lat: -41.2942303,
      lng: 174.7958889
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
        color: 'rgb(70, 126, 168)'
      },
      icon: {
        path: google.maps.SymbolPath.CIRCLE, //or any others
        scale: 0.1
      },
      
    });
  }




  (this.events = () => { 
    const here = this
    document.addEventListener('DOMContentLoaded', this.initMap)
    window.addEventListener('resize', function resizeMap (e) {
      let newWidth = e.target.innerWidth

      if ((newWidth >= resize && oldWidth < resize) || (newWidth <= resize && oldWidth >= resize)) {
        here.initMap()
        oldWidth = newWidth
      }
    })
  })()
}

export default Map
