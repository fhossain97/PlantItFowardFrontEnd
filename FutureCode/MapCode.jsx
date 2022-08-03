import React, { useRef, useEffect, useState } from "react";
//import geolocation from "./Services/geolocation";
import MapStyles from "./map-styles";

const Maps = ({lat, lng}) => {
  const mapDiv = useRef(null);

  const setMap = (props) => {
    if (props.lat && props.lng) {
      const location = { lat: props.lat, lng: props.lng };
      const map = new window.google.maps.Map(
        mapDiv.current, {
        zoom: props.zoom || 12,
        center: location,
        disableDefaultUI: true,
        styles: MapStyles
      });
      new window.google.maps.Marker({ position: location, map: map });
    }
  };

  const geolocation = () => {

    new Promise(resolve => {
        navigator.geolocation.getCurrentPosition(pos => resolve({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        }));
      });

}

  const [latLng, setLatLng] = useState({
    lat: "",
    lng: "",
  });

  useEffect(() => {
    async function getLatLng() {
      fetch("http://localhost:3000/about");
      const {lat, lng}  = await geolocation()
        .then((res) => res.json())
        .then((data) => setLatLng(data))
      setMap();
    }
  }, []);

  return <div ref={mapDiv} lat={lat} lng={lng}></div>;
};

export default Maps;
