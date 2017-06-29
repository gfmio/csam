"use strict";
exports.__esModule = true;
var component_1 = require("../component");
function Application(props, children) {
    props = props || {};
    children = children || [];
    return (component_1.component("html", null,
        component_1.component("head", null,
            component_1.component("meta", { charset: "utf-8" }),
            props.title !== undefined ? component_1.component("title", null, props.title) : "",
            component_1.component("meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge" }),
            component_1.component("meta", { "http-equiv": "Content-Language", content: "en" }),
            component_1.component("meta", { name: "viewport", content: "width=device-width" }),
            props.description !== undefined ? component_1.component("meta", { name: "description", content: props.description }) : "",
            props.keywords !== undefined ? component_1.component("meta", { name: "keywords", content: props.keywords }) : "",
            component_1.component("link", { href: "/css/csam.css", media: "all", rel: "stylesheet" }),
            props.favicon !== undefined ? component_1.component("link", { rel: "icon", type: "image/png", href: props.favicon }) : ""),
        component_1.component("body", null,
            children,
            component_1.component("script", { src: "/js/app.js", type: "text/javascript" }))));
}
exports.Application = Application;
//# sourceMappingURL=application.js.map