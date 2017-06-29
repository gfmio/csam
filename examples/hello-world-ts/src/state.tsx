
import { component as c } from "../../../lib/component";
import { State } from "../../../lib/state";
import { HelloWorldActions } from "./actions";
import { HelloWorldModel } from "./model";

import { Application } from "./components/application";

export class HelloWorldState extends State {
  public actions: HelloWorldActions;

  constructor(actions: HelloWorldActions) {
    super();
    this.actions = actions;
  }

  public representation(model: HelloWorldModel) {
    const a = (<Application />);
    this.display({
      component: a,
      status: 200,
    });
  }
}
