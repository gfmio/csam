"use strict";
exports.__esModule = true;
var component_1 = require("../component");
function htmlTagWrapper(name) {
    return function (props, children) {
        return component_1.component(name, props, children);
    };
}
exports.htmlTagWrapper = htmlTagWrapper;
//# sourceMappingURL=html-tag-wrapper.js.map