import React from "react";
import { GoogleMap, Marker, MarkerClusterer } from "@react-google-maps/api";
import { useState, useEffect } from "react";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

function Maps({ lat, lng }) {
  const [centers, setCenters] = useState({
    lat:'40.786718450836766',
    lng:'-73.72577226019823',
  });

  useEffect(() => {
    setCenters({
      lat: lat,
      lng: lng,
    });
  }, []);


  //console.log(centers)
  console.log(lat, lng);
  return (
    // googleMapsApiKey="AIzaSyDfcFt2zs-5ODLk-Vb8tvgVEkfVFol8_HU">
   

    <GoogleMap mapContainerStyle={containerStyle} center={centers} zoom={10}>
      <Marker position={centers}
      animation={'bounce'}
      draggable={true}
      ></Marker>
{/* <MarkerClusterer minimumClusterSize={5} gridSize={60}
>


</MarkerClusterer> */}
  
    </GoogleMap>

  );
}
export default Maps;

//link for assitance -https://react-google-maps-api-docs.netlify.app/
