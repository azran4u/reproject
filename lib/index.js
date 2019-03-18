"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dirty = __importStar(require("dirty-reprojectors"));
// import * as dirty from '../node_modules/dirty-reprojectors';
var options = {
    forward: dirty.equirectangular,
    reverse: dirty.mercator
};
var coordinate = [34.956806299325386, 32.82589141525937];
var res = dirty(options, coordinate);
console.log(res);
function add(x, y) {
    return x + y;
}
console.log("starting app new");
console.log(add(1, 3));
