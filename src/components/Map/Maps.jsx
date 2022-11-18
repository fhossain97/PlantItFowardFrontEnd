import React from "react";
import { GoogleMap, Marker, StandaloneSearchBox, LoadScript } from "@react-google-maps/api";
import { useState, useEffect } from "react";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};


function Maps({ lat, lng }) {
  const [centers, setCenters] = useState({
    lat: 40.786718450836766,
    lng: -73.72577226019823,
  });

  useEffect(() => {
    setCenters({
      lat: centers.lat,
      lng: centers.lng,
    });
  });

  const [search, setSearch] = useState(null);

  const onPlacesChanged = () => {

    let location = search.getPlaces()
    console.log(location[0])
    console.log('Location found')
    setCenters({
      lat: location[0].geometry.location.lat(),
      lng: location[0].geometry.location.lng(),
    });

  };

  
  const onLoad = ref => {
    setSearch(ref);
  };
  //console.log(centers)
  console.log(lat, lng);

  
  return (
   
<LoadScript
googleMapsApiKey={process.env.REACT_APP_GMAP_API}
      libraries={['places']}
      >

    <GoogleMap mapContainerStyle={containerStyle} center={centers} zoom={20}>
      <Marker position={centers}
      animation={'drop'}
      draggable={true}
      ></Marker>

<StandaloneSearchBox
      onLoad={onLoad}
      onPlacesChanged={
        onPlacesChanged}
>

<input
              type="text"
              placeholder="Search Florists"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px"
              }}
            />
</StandaloneSearchBox>

  
    </GoogleMap>
    </LoadScript>
  );
}
export default Maps;

//link for assitance -https://react-google-maps-api-docs.netlify.app/
