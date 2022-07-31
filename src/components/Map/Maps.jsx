import React from "react";
import { GoogleMap, Marker, MarkerClusterer } from "@react-google-maps/api";
import { useState, useEffect } from "react";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

function Maps({ lat, lng }) {
  const [centers, setCenters] = useState({
    lat: 40.7148919,
    lng: -73.7676799,
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
     animations={"BOUNCE"}
      ></Marker>

      <></>
    </GoogleMap>
  );
}
export default Maps;

//link for assitance -https://react-google-maps-api-docs.netlify.app/
//Es linter