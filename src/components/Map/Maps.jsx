import React, { useEffect } from "react";
import mapStyle from "../Map/map-style";
import styles from "./Map.module.css";

function Map(props) {

  let mapDiv = React.createRef();

  useEffect(() => {
    setMap();
  });

  const setMap = () => {
    if (props.lat && props.lng) {
      const location = { lat: props.lat, lng: props.lng };
      const map = new window.google.maps.Map(mapDiv.current, {
        zoom: props.zoom || 12,
        center: location,
        disableDefaultUI: true,
        styles: mapStyle,
      });
      new window.google.maps.Marker({ position: location, map: map });
    }
  };

  return <div ref={mapDiv} className={styles.Map}></div>;
}

export default Map;
