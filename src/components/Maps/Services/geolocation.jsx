import React from 'react'

const geolocation = () => {

    new Promise(resolve => {
        navigator.geolocation.getCurrentPosition(pos => resolve({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        }));
      });


  return (
    <div>geolocation</div>
  )
}

export default geolocation