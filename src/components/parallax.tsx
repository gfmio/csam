import { component as c } from "../component";

export function Parallax(props: any, children: any[]) {
  props = props || {};
  children = children || [];

  const defaultStyle = {
    "background-attachment": "fixed",
    "background-image": "url(" + props.src + ")",
    "background-position": "50% 50%",
    "background-repeat": "no-repeat",
    "background-size": "cover",
  };

  const style = {...defaultStyle, ...props.style};

  return (
    <div style={ style }>
      { children }
    </div>
  );
}
