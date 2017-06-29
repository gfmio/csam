"use strict";
exports.__esModule = true;
var component_1 = require("../component");
var html_1 = require("./html");
function Application(props, children) {
    props = props || {};
    children = children || [];
    return (component_1.component(html_1.Html, null,
        component_1.component(html_1.Head, null,
            component_1.component(html_1.Meta, { charset: "utf-8" }),
            props.title !== undefined ? component_1.component(html_1.Title, null, props.title) : [],
            component_1.component(html_1.Meta, { "http-equiv": "X-UA-Compatible", content: "IE=edge" }),
            component_1.component(html_1.Meta, { "http-equiv": "Content-Language", content: "en" }),
            component_1.component(html_1.Meta, { name: "viewport", content: "width=device-width" }),
            props.description !== undefined ? component_1.component(html_1.Meta, { name: "description", content: props.description }) : [],
            props.keywords !== undefined ? component_1.component(html_1.Meta, { name: "keywords", content: props.keywords }) : [],
            component_1.component(html_1.Link, { href: "/css/csam.css", media: "all", rel: "stylesheet" }),
            props.favicon !== undefined ? component_1.component(html_1.Link, { rel: "icon", type: "image/png", href: props.favicon }) : []),
        component_1.component(html_1.Body, null,
            children,
            component_1.component(html_1.Script, { src: "/js/app.js", type: "text/javascript" }))));
}
exports.Application = Application;
//# sourceMappingURL=application.js.map