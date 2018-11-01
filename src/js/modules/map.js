
// Map will initialise the google map API
// if the screen size is less than resize parameter it will center the map on the logo/icon
// if it large than the resize parameter is will focus the center to the right of the map
// allowing the contact form to sit in front
function Map (resize = 740) {
  
  let oldWidth = 0
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

    let marker = new google.maps.Marker({
      position: logoLocation,
      map: map

    })
  }

  (this.events = () => {
    const here = this
    document.addEventListener('DOMContentLoaded', this.initMap)
    window.addEventListener('resize', function resizeMap (e) {
      
      let newWidth = e.target.innerWidth
      console.log(newWidth)
      console.log(oldWidth)
      if ((newWidth >= resize && oldWidth < resize) || (newWidth <= resize && oldWidth >= resize )) {
        here.initMap()
        oldWidth = newWidth
      }
    })
  })()
}

export default Map
