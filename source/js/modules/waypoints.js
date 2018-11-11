import { sectionArray } from './elements.js'
require('waypoints/lib/noframework.waypoints.min.js')

// takes an array of all the waypoint sections.
// For each section it creates functions that will
// generate waypoints at the beging and end of the section
// these function also take a  callback function
// this callback function will be added to the waypoint
// and trigger whenever the waypoint is moved through.
// this is then passed to the nav module where
// the waypoints are generated with a specific callback function

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
