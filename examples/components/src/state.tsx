
import { State } from "../../../lib/state";
import { HelloWorldActions } from "./actions";
import { HelloWorldModel } from "./model";

export class HelloWorldState extends State {
  public actions: HelloWorldActions;

  constructor(actions: HelloWorldActions) {
    super();
    this.actions = actions;
  }

  public nextAction(model: HelloWorldModel) {
    console.log('in next action');
  }

  public representation(model: HelloWorldModel) {
    this.display(model.currentView());
  }
}
