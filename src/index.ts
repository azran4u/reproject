import * as dirty from "dirty-reprojectors";

const options = {
    forward: dirty.equirectangular,
    reverse: dirty.mercator
  };
const coordinate: number[] = [34.956806299325386, 32.82589141525937];
const res: number[] = dirty.reproject(options, coordinate);
console.log(res);

function add(x: number, y: number){
    return x+y;
}

console.log("starting app new");
console.log(add(1,3));