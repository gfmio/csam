
import { HelloWorldModel } from "./model";

export function helloWorldActions(model: HelloWorldModel) {
  return {
    transitionTo: (url: string): void => {
      model.present({ currentUrl: url });
    },
  };
}
