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
        "font-size": "14px",
        "list-style": "none",
        "padding": 0
    };
    var seperatorStyle = {
        color: "#999",
        display: "inline-block",
        margin: "0 20px"
    };
    var linkStyle = {
        "color": "#999",
        "cursor": "pointer",
        "display": "inline-block",
        "text-decoration": "none",
        "touch-action": "manipulation"
    };
    var lastChild = {
        color: "#666"
    };
    var elementStyle = {
        flex: "none"
    };
    var style = __assign({}, defaultStyle, props.style);
    children = children.map(function (child, i) {
        child.data.style = (i === children.length - 1) ? __assign({}, linkStyle, lastChild, child.data.style) : __assign({}, linkStyle, child.data.style);
        return (component_1.component(html_1.Li, null,
            (i > 0) ? component_1.component(html_1.Span, { style: seperatorStyle }, "/") : "",
            component_1.component(html_1.Span, { style: elementStyle }, child)));
    });
    return (component_1.component(html_1.Ul, { style: style }, children));
}
exports.Breadcrumb = Breadcrumb;
//# sourceMappingURL=breadcrumb.js.map