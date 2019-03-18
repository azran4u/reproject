import {dirty_reprojectors} from "dirty-reprojectors";
// import * as dirty from '../node_modules/dirty-reprojectors';


const options = {
    forward: dirty_reprojectors.equirectangular,
    reverse: dirty_reprojectors.mercator
  };
const coordinate: number[] = [34.956806299325386, 32.82589141525937];
const res: number[] = dirty_reprojectors(options, coordinate);
console.log(res);

function add(x: number, y: number){
    return x+y;
}

console.log("starting app new");
console.log(add(1,3));