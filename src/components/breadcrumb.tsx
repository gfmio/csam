import { component as c } from "../component";
import { Li, Span, Ul } from "./html";

export function Breadcrumb(props: any, children: any[]) {
  props = props || {};
  children = children || [];

  const defaultStyle = {
    "display": "flex",
    "flex-wrap": "wrap",
    "font-size": "14px",
    "list-style": "none",
    "padding": 0,
  };

  const seperatorStyle = {
    color: "#999",
    display: "inline-block",
    margin: "0 20px",
  };

  const linkStyle = {
    "color": "#999",
    "cursor": "pointer",
    "display": "inline-block",
    "text-decoration": "none",
    "touch-action": "manipulation",
  };

  const lastChild = {
    color: "#666",
  };

  const elementStyle = {
    flex: "none",
  };

  const style = {...defaultStyle, ...props.style};

  children = children.map((child, i) => {
    child.data.style = (i === children.length - 1) ?
      {...linkStyle, ...lastChild, ...child.data.style} :
      {...linkStyle, ...child.data.style};
    return (
      <Li>
        { (i > 0) ? <Span style={ seperatorStyle }>/</Span> : "" }
        <Span style={ elementStyle }>{ child }</Span>
      </Li>
    );
  });

  return (
    <Ul style={ style }>
      { children }
    </Ul>
  );
}
