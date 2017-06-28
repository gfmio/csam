/**
 * Component module.
 * @module csam/component
 */

declare function require(moduleName: string): any;

const h = require("snabbdom/h");
import { flatten } from "./helpers/flatten";

export function component(name: any, props: any = {}, children: any[] = []) {
  // Ensure that props is actually an object to prevent errors with Snabbdom
  if (props !== Object(props)) {
    props = {};
  }

  // Ensure that children is actually an array to prevent errors with Snabbdom
  if (children !== Object(children)) {
    children = [];
  }

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

  return h(name, props, children);
}
