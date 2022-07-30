import React, { useState, useEffect } from "react";
import Map from "../components/Map/Maps";
import { getCurrentLatLng } from "../components/Map/geolocation";


function About() {
  const [coords, setCoords] = useState({
    lat: null,
    lng: null
  });


  useEffect(() => {
    getCoords();
  }, []);


  const getCoords = async () => {
    let { lat, lng } = await getCurrentLatLng();
    setCoords({ lat, lng });
  };

  return (
    <div>
      <Map lat={coords.lat} lng={coords.lng} />
hell

    </div>
  );
}

export default About
