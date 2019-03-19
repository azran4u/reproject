// import {dirty_reprojectors} from "dirty-reprojectors";
import {GeoProjection, geoEquirectangular, geoMercator} from "d3-geo";
import { exists } from "fs";
// import * as dirty from '../node_modules/dirty-reprojectors';

const proj4326: GeoProjection = geoEquirectangular();
const proj3857: GeoProjection = geoMercator();

// const coordinate: [number, number] = [34.956806299325386, 32.82589141525937]; // Haifa
const coordinate: [number, number] = [35.19071102142334, 33.27171288126284]; // Zor

const epsg4326XY: [number, number] = proj4326(coordinate);
console.log( "LatLng to EPSG4326 [" + coordinate + "] is:[" +  epsg4326XY + "]");

const latlon4326: [number, number] = proj4326.invert(epsg4326XY);
console.log( "EPSG4326 to LatLng [" + epsg4326XY + "] is:[" + proj4326.invert(epsg4326XY) + "]" );

const epsg3857LatLng: [number, number] = proj3857.invert(epsg4326XY);
console.log( "LatLng for mercator [" + epsg3857LatLng + "]" );

const epsg3857XY: [number, number] = proj3857(epsg3857LatLng);
console.log( "EPSG3857 XY = [" + epsg3857XY + "]" );