import {GeoProjection, geoEquirectangular, geoMercator} from "d3-geo";

const proj4326: GeoProjection = geoEquirectangular();
const proj3857: GeoProjection = geoMercator();

// const coordinate: [number, number] = [34.956806299325386, 32.82589141525937]; // Haifa
const coordinate: [number, number] = [35.19071102142334, 33.27171288126284]; // Zor
console.log( "Original LatLng: [" + coordinate + "]");

const epsg4326XY: [number, number] = proj4326(coordinate);
console.log( "EPSG4326 XY = [" + epsg4326XY + "]");

const latLng3857: [number, number] = proj3857.invert(epsg4326XY);
console.log( "EPSG4326 reverse to LatLng (for Mapbox) = [" + latLng3857 + "]" );

const epsg3857XY: [number, number] = proj3857(latLng3857);
console.log( "EPSG3857 XY of the reversed LatLng = [" + epsg3857XY + "]" );

// input - original coordinate
// output - coordinate for mapbox
function forward(coordination: [number, number]) : [number, number] {
  return proj3857.invert(proj4326(coordination));
}

// input - coordinate in mapbox
// output - original coordinate
function reverse(coordination: [number, number]) : [number, number] {
  return proj4326.invert(proj3857(coordination));
}

console.log( "Original = [" + coordinate + "]");
console.log("forward = [" + forward(coordinate) + "]");
console.log("reverse = [" + reverse(forward(coordinate)) + "]");