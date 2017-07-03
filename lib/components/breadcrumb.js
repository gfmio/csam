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
function Breadcrumb(props, children) {
    props = props || {};
    children = children || [];
    var defaultStyle = {
        "display": "flex",
        "flex-wrap": "wrap",
        "padding": 0,
        "list-style": "none",
        "font-size": "14px"
    };
    var seperatorStyle = {
        "display": "inline-block",
        "margin": "0 20px",
        "color": "#999"
    };
    var linkStyle = {
        "text-decoration": "none",
        "cursor": "pointer",
        "display": "inline-block",
        "color": "#999",
        "touch-action": "manipulation"
    };
    var lastChild = {
        "color": "#666"
    };
    var elementStyle = {
        "flex": "none"
    };
    var style = __assign({}, defaultStyle, props.style);
    children = children.map(function (child, i) {
        if (i == children.length - 1) {
            child.data.style = __assign({}, linkStyle, lastChild, child.data.style);
        }
        else {
            child.data.style = __assign({}, linkStyle, child.data.style);
        }
        return (component_1.component(html_1.Li, null,
            (i > 0) ? component_1.component(html_1.Span, { style: seperatorStyle }, "/") : '',
            component_1.component(html_1.Span, { style: elementStyle }, child)));
    });
    return (component_1.component(html_1.Ul, { style: style }, children));
}
exports.Breadcrumb = Breadcrumb;
//# sourceMappingURL=breadcrumb.js.map