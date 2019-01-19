import React  from 'react'
import Clock from 'react-live-clock'

const ClockTime = () => {
  return (
    <Clock
        format={'dddd, MMMM Mo, YYYY, h:mm:ss A'}
        ticking={true}
        timezone={'US/Eastern'} />
  )
}

export default ClockTime
