import { component as c } from "../component";
import { Span } from "./html";

export function Badge(props: any, children: any[]) {
  props = props || {};
  children = children || [];

  const defaultStyle = {
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
    "vertical-align": "middle",
  };

  const style = {...defaultStyle, ...props.style};

  return (
    <Span style={ style }>
      { children }
    </Span>
  );
}
