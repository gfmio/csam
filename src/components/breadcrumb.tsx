import { component as c } from "../component";
import { Ul, Li, Span } from "./html";

export function Breadcrumb(props: any, children: any[]) {
  props = props || {};
  children = children || [];

  const defaultStyle = {
    "display": "flex",
    "flex-wrap": "wrap",
    "padding": 0,
    "list-style": "none",
    "font-size": "14px",
  };

  const seperatorStyle = {
    "display": "inline-block",
    "margin": "0 20px",
    "color": "#999",
  };

  const linkStyle = {
    "text-decoration": "none",
    "cursor": "pointer",
    "display": "inline-block",
    "color": "#999",
    "touch-action": "manipulation",
  }

  const lastChild = {
    "color": "#666",
  }

  const elementStyle = {
    "flex": "none",
  };

  const style = {...defaultStyle, ...props.style};

  children = children.map((child, i) => {
    if(i == children.length - 1){
      child.data.style = {...linkStyle, ...lastChild, ...child.data.style};
    } else {
      child.data.style = {...linkStyle, ...child.data.style};
    }
    return (
      <Li>
        { (i > 0) ? <Span style={ seperatorStyle }>/</Span> : '' }
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
