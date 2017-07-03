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
        "box-sizing": "border-box",
        "min-width": "22px",
        "height": "22px",
        "line-height": "22px",
        "padding": "0 5px",
        "border-radius": "500px",
        "vertical-align": "middle",
        "background": "#1e87f0",
        "color": "#fff",
        "font-size": "14px",
        "display": "inline-flex",
        "-ms-flex-pack": "center",
        "-webkit-justify-content": "center",
        "justify-content": "center",
        "-ms-flex-align": "center",
        "-webkit-align-items": "center",
        "align-items": "center"
    };
    var style = __assign({}, defaultStyle, props.style);
    return (component_1.component(html_1.Span, { style: style }, children));
}
exports.Badge = Badge;
//# sourceMappingURL=badge.js.map