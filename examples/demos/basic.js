import React from 'react'
import BigCalendar from 'react-big-calendar'
import events from '../events'

// let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

let Basic = () => (
  <BigCalendar
    events={events}
    views={['week']}
    defaultView="week"
    step={60}
    defaultDate={new Date(2015, 3, 1)}
  />
)

export default Basic
