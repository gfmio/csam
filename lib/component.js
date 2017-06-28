/**
 * Component module.
 * @module csam/component
 */
"use strict";
exports.__esModule = true;
var h = require("snabbdom/h");
var flatten_1 = require("./helpers/flatten");
function component(name, props, children) {
    if (props === void 0) { props = {}; }
    if (children === void 0) { children = []; }
    // Ensure that props is actually an object to prevent errors with Snabbdom
    if (props !== Object(props)) {
        props = {};
    }
    // Ensure that children is actually an array to prevent errors with Snabbdom
    if (children !== Object(children)) {
        children = [];
    }
    // Extract on for snabbdom
    var onObj = {};
    if ("on" in props) {
        onObj = props.on;
        delete props.on;
    }
    // Extract style for snabbdom
    var styleObj = {};
    if ("style" in props) {
        styleObj = props.style;
        delete props.style;
    }
    props = { attrs: props, on: onObj, style: styleObj };
    children = flatten_1.flatten(children);
    return h(name, props, children);
}
exports.component = component;
//# sourceMappingURL=component.js.map