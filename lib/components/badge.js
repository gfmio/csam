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
var html_1 = require("./html");
function Badge(props, children) {
    props = props || {};
    children = children || [];
    var defaultStyle = {
        "-ms-flex-align": "center",
        "-ms-flex-pack": "center",
        "-webkit-align-items": "center",
        "-webkit-justify-content": "center",
        "align-items": "center",
        "background": "#1e87f0",
        "border-radius": "500px",
        "box-sizing": "border-box",
        "color": "#fff",
        "display": "inline-flex",
        "font-size": "14px",
        "height": "22px",
        "justify-content": "center",
        "line-height": "22px",
        "min-width": "22px",
        "padding": "0 5px",
        "vertical-align": "middle"
    };
    var style = __assign({}, defaultStyle, props.style);
    return (component_1.component(html_1.Span, { style: style }, children));
}
exports.Badge = Badge;
//# sourceMappingURL=badge.js.map