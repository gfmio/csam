"use strict";
/**
 * Component module.
 * @module csam/component
 */
exports.__esModule = true;
/**
 * @hidden
 */
var h = require("snabbdom/h");
var flatten_1 = require("./helpers/flatten");
/**
 * Renders a component with props and children using Snabbdom
 * @param { String | (props, children) => any } component - The component to be rendered, which needs to
 *                                                          either be a string containing a valid HTML tag
 *                                                          or a functional component.
 * @param { any } props - The props object
 * @param { any[] } children - The children of the component
 */
function component(component, props, children) {
    if (props === void 0) { props = {}; }
    if (children === void 0) { children = []; }
    if (arguments.length > 2) {
        children = Array.prototype.slice.call(arguments, 2);
        // children = arguments.slice(2);
    }
    // Ensure that props is actually an object to prevent errors with Snabbdom
    if (props !== Object(props)) {
        props = {};
    }
    // Ensure that children is actually an array to prevent errors with Snabbdom
    if (!(children instanceof Array)) {
        children = [];
    }
    if (component instanceof Function) {
        return component(props, children);
    }
    else {
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
        // console.log("blaaaa", component, props, children);
        return h(component, props, children);
    }
}
exports.component = component;
//# sourceMappingURL=component.js.map