import { component as c } from "../component";
// TODO: Import html components with default view model applied! (see below as well)
import { H3, Li, Span, Ul } from "./html";
import { View } from "./view";

export function Accordion(props: any, children: any[]) {
  props = props || {};
  children = children || [];

  const defaultStyle = {
    "list-style": "none",
    "padding": 0,
  };

  const titleStyle = {
    "cursor": "pointer",
    // TODO: Use H3 including default ViewModel and get rid of font-size attribute here
    "font-size": "20px",
    "line-height": 1.4,
    "margin": 0,
    "overflow": "hidden",
  };

  const marginStyle = {
    "margin-top": "20px",
  };

  const iconCloseStyle = {
    "background-image": "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%3E%3C%2Frect%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%221%22%20height%3D%2213%22%20x%3D%226%22%20y%3D%220%22%3E%3C%2Frect%3E%0A%3C%2Fsvg%3E\")",
    "background-position": "50% 50%",
    "background-repeat": "no-repeat",
    "content": "",
    "float": "right",
    "height": "1.4em",
    "width": "1.4em",
  };

  const iconOpenStyle = {
    ...iconCloseStyle,
    "background-image": "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%3E%3C%2Frect%3E%0A%3C%2Fsvg%3E\")",
  };

  const style = {...defaultStyle, ...props.style};

  const accordionElement = (title: string, content: any, isOpen: boolean, onClick: any) => {
    const viewStyle = {
      "margin-top": isOpen ? marginStyle["margin-top"] : "0px",
      "max-height": isOpen ? 800 : 0,
      "opacity": isOpen ? 1 : 0,
      "transition": "opacity, max-height, margin-top 0.8s",
    }
    return (
      <Li style={ marginStyle }>
        <H3 style={ titleStyle } onclick={ onClick }>
          { title }
          <Span style={ isOpen ? iconOpenStyle : iconCloseStyle }></Span>
        </H3>
        <View style={ viewStyle } hidden={ !isOpen }>
          { content }
        </View>
      </Li>
    );
  }

  const items = props.content.map((el: any) => accordionElement(el.title, el.content, el.open, props.onClick));

  return (
    <Ul style={ style }>
      { items }
    </Ul>
  );
}
