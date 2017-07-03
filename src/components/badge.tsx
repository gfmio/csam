import { component as c } from "../component";
import { Span } from "./html";

export function Badge(props: any, children: any[]) {
  props = props || {};
  children = children || [];

  const defaultStyle = {
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
    "align-items": "center",
  };

  const style = {...defaultStyle, ...props.style};

  return (
    <Span style={ style }>
      { children }
    </Span>
  );
}
