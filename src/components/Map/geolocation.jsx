export function getCurrentLatLng() {
  return new Promise(resolve => {
    navigator.geolocation.watchPosition(pos => resolve({
      lat: pos.coords.latitude,
      lng: pos.coords.longitude
    }));
  });
}