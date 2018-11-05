import { sectionArray } from './elements.js'
require('waypoints/lib/noframework.waypoints.js')

// takes an array of all the waypoint sections
// creates a function that generates a waypoint
// at the begning and end of each section
// this is then passed to the nav module where
// event listeners are added to the array
export const waypointArray = sectionArray.reduce((reducer, section) => {
  const waypointIn = (inputFunction) => {
    return new Waypoint({
      element: section,
      handler: function waypointCallback () { return inputFunction(this) },
      offset: 300
    })
  }
  const waypointOut = (inputFunction) => {
    return new Waypoint({
      element: section,
      handler: function waypointCallback () {return inputFunction(this)},
      offset: -(section.clientHeight - 100)
    })
  }
  return [...reducer, waypointIn, waypointOut]
}, [])

// we
