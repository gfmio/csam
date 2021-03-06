/**
 * Component module.
 * @module csam/component
 */

/**
 * @hidden
 */
declare function require(moduleName: string): any;

/**
 * @hidden
 */
const h = require("snabbdom/h");

import { flatten } from "./helpers/flatten";

/**
 * Renders a component with props and children using Snabbdom
 * @param { String | (props, children) => any } component - The component to be rendered, which needs to
 *                                                          either be a string containing a valid HTML tag
 *                                                          or a functional component.
 * @param { any } props - The props object
 * @param { any[] } children - The children of the component
 */
export function component(component: string | ((props: any, children: any[]) => any),
                          props: any = { /**/ },
                          children: any[] = []): any {
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
  } else {
    // Extract on for snabbdom
    let onObj = {};
    if ("on" in props) {
      onObj = props.on;
      delete props.on;
    }

    // Extract style for snabbdom
    let styleObj = {};
    if ("style" in props) {
      styleObj = props.style;
      delete props.style;
    }

    props = { attrs: props, on: onObj, style: styleObj };
    children = flatten(children);

    // console.log("blaaaa", component, props, children);
    return h(component, props, children);
  }
}
