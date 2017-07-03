
import { State } from "../../../lib/state";
import { HelloWorldActions } from "./actions";
import { HelloWorldModel } from "./model";

export class HelloWorldState extends State {
  public actions: HelloWorldActions;

  constructor(actions: HelloWorldActions) {
    super();
    this.actions = actions;
  }

  public representation(model: HelloWorldModel) {
    this.display(model.currentView());
  }
}
