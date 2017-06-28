"use strict";
/**
 * flatten helper module.
 * @module csam/helpers/flatten
 */
exports.__esModule = true;
/**
 * Flattens an array by recursively flattening all elements.
 * @param {any[]} a - The (nested) array
 */
function flatten(a) {
    var arr = [];
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var e = a_1[_i];
        if (e instanceof Array) {
            arr = arr.concat(flatten(e));
        }
        else {
            arr.push(e);
        }
    }
    return arr;
}
exports.flatten = flatten;
//# sourceMappingURL=flatten.js.map