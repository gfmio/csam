/**
 * State module.
 * @module csam/state
 */

import { Model } from "./model";

export class State {
  public representation: (model: Model) => void;
  public nextAction: (model: Model) => void;

  constructor(representation: (model: Model) => void,
              nextAction: (model: Model) => void ) {
    this.representation = representation;
    this.nextAction = nextAction;
  }

  // display method for rendering the view
  // Gets updated in client and server respectively
  public display(view: any) {
    /**/
  }

  public update(model: any) {
    this.representation(model);
    this.nextAction(model);
  }
}
