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
// TODO: Import html components with default view model applied! (see below as well)
var html_1 = require("./html");
var view_1 = require("./view");
function Accordion(props, children) {
    props = props || {};
    children = children || [];
    var defaultStyle = {
        "list-style": "none",
        "padding": 0
    };
    var titleStyle = {
        "cursor": "pointer",
        // TODO: Use H3 including default ViewModel and get rid of font-size attribute here
        "font-size": "20px",
        "line-height": 1.4,
        "margin": 0,
        "overflow": "hidden"
    };
    var marginStyle = {
        "margin-top": "20px"
    };
    var iconCloseStyle = {
        "background-image": "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%3E%3C%2Frect%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%221%22%20height%3D%2213%22%20x%3D%226%22%20y%3D%220%22%3E%3C%2Frect%3E%0A%3C%2Fsvg%3E\")",
        "background-position": "50% 50%",
        "background-repeat": "no-repeat",
        "content": "",
        "float": "right",
        "height": "1.4em",
        "width": "1.4em"
    };
    var iconOpenStyle = __assign({}, iconCloseStyle, { "background-image": "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%3E%3C%2Frect%3E%0A%3C%2Fsvg%3E\")" });
    var style = __assign({}, defaultStyle, props.style);
    var accordionElement = function (title, content, isOpen, onClick) {
        var viewStyle = {
            "margin-top": isOpen ? marginStyle["margin-top"] : "0px",
            "max-height": isOpen ? 800 : 0,
            "opacity": isOpen ? 1 : 0,
            "transition": "opacity, max-height, margin-top 0.8s"
        };
        return (component_1.component(html_1.Li, { style: marginStyle },
            component_1.component(html_1.H3, { style: titleStyle, onclick: onClick },
                title,
                component_1.component(html_1.Span, { style: isOpen ? iconOpenStyle : iconCloseStyle })),
            component_1.component(view_1.View, { style: viewStyle, hidden: !isOpen }, content)));
    };
    var items = props.content.map(function (el) { return accordionElement(el.title, el.content, el.open, props.onClick); });
    return (component_1.component(html_1.Ul, { style: style }, items));
}
exports.Accordion = Accordion;
//# sourceMappingURL=accordion.js.map