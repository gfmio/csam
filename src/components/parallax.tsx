import { component as c } from "../component";
import { View } from "./view";

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
    <View style={ style }>
      { children }
    </View>
  );
}
