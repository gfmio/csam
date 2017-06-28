/**
 * flatten helper module.
 * @module csam/helpers/flatten
 */
"use strict";
exports.__esModule = true;
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