/**
 * State module.
 * @module csam/state
 */
import { Model } from "./model";
/** The State class handling the representation, display and calling the next action. */
export declare class State {
    /**
     * Create a State object.
     */
    constructor();
    /**
     * Compute the representation of the updated model.
     * @param { Model } model - The updated model from which the representation is computed
     */
    representation(model: Model): void;
    /**
     * Compute and trigger the next action of the application.
     * @param { Model } model - The updated model from which the next action is computed and trigged.
     */
    nextAction(model: Model): void;
    /**
     * Display method for rendering the view
     * Gets overwritten by Client and Server respectively
     */
    display(view: any): void;
    /**
     * Update method triggering the representation and the next action to be triggered
     * @param { Model } model - The new model
     */
    update(model: any): void;
}
