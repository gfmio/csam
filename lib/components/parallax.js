"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var component_1 = require("../component");
var view_1 = require("./view");
function Parallax(props, children) {
    props = props || {};
    children = children || [];
    var defaultStyle = {
        "background-attachment": "fixed",
        "background-image": "url(" + props.src + ")",
        "background-position": "50% 50%",
        "background-repeat": "no-repeat",
        "background-size": "cover"
    };
    var style = __assign({}, defaultStyle, props.style);
    return (component_1.component(view_1.View, { style: style }, children));
}
exports.Parallax = Parallax;
//# sourceMappingURL=parallax.js.map