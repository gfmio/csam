
import React from "react";

export function reactNativeWrapper(reactNativeComponent: any) {
  return (props: any, children: any[]) => {
    return React.createElement.apply(React, [reactNativeComponent, props].concat(children));
  };
}
