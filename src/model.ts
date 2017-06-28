/**
 * The modyke containing the Model class that stores the state machine driving the application.
 * @module csam/model
 */

import { State } from "./state";

declare var present: any;

/** The Model class describing the state machine driving CSAM applications. */
export class Model {
  public model: any;
  public state: State;

  /*
   * Create a Model object.
   * @param { Model } model - A model data object.
   * @param { State } state - The state object.
   */
  constructor(model: any, state: State) {
    this.model = model;
    this.state = state;

    // GLOBAL present declaration. To do: Remove global variable if possible.
    present = this.present;
  }

  /*
   * Present method that accepts data and triggers the state to update if necessary.
   * @param { Model } model - A model data object.
   * @param { State } state - The state object.
   */
  public present(data: any) {
    if (this.model.present(data)) {
      this.state.update(this.model);
    }
  }
}
