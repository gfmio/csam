/**
 * State module.
 * @module csam/state
 */

import { Model } from "./model";

/** The State class handling the representation, display and calling the next action. */
export class State {
  /**
   * Create a State object.
   */
  constructor() {
    /* By default, nothing happens here. Can be overwritten as needed for the speicifc application */
  }

  /**
   * Compute the representation of the updated model.
   * @param { Model } model - The updated model from which the representation is computed
   */
  public representation(model: Model): void {
    /* By default, nothing happens here. Can be overwritten as needed for the speicifc application */
  }

  /**
   * Compute and trigger the next action of the application.
   * @param { Model } model - The updated model from which the next action is computed and trigged.
   */
  public nextAction(model: Model): void {
    /* By default, nothing happens here. Can be overwritten as needed for the speicifc application */
  }

  /**
   * Display method for rendering the view
   * Gets overwritten by Client and Server respectively
   */
  public display(view: any) {
    /* Displays the view. Gets overwritten by the specific application it is used for. */
  }

  /**
   * Update method triggering the representation and the next action to be triggered
   * @param { Model } model - The new model
   */
  public update(model: any) {
    this.representation(model);
    this.nextAction(model);
  }
}
