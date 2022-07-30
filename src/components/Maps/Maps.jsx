import React, { useRef } from 'react';
import mapStyle from './map-style';


const Maps = () => {

    const mapDiv = useRef(null);

    const setMap = (props) => {
        if (props.lat && props.lng) {
            const location = {lat: props.lat, lng: props.lng};
            const map = new window.google.maps.Map(
              mapDiv.current, {
                zoom: props.zoom || 12,
                center: location,
                disableDefaultUI: true,
                styles: mapStyle
    }
            )
    new window.google.maps.Marker({position: location, map: map});
            
}
}
  return (
    <div ref={mapDiv}></div>
  )
}

export default Maps

