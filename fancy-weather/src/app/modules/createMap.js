import mapboxgl from 'mapbox-gl'

function createMaps(loc) {
  const location = loc.split(',').reverse()
  mapboxgl.accessToken = 'pk.eyJ1IjoiZWthdGVyaW5hLWxhdCIsImEiOiJja2F3Nm03a2wwMmN5MnJsaWVsbmhiajc4In0.h7avxVEt622ZWLdcn3rZFQ'
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: location,
    zoom: 10,
    logo: false,
  })
  map.flyTo({
    center: location,
    speed: 0.2,
    curve: 1,
    essential: true,
  })
  new mapboxgl.Marker()
    .setLngLat(location)
    .addTo(map)
}
export default createMaps
