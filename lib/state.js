"use strict";
/**
 * State module.
 * @module csam/state
 */
exports.__esModule = true;
/** The State class handling the representation, display and calling the next action. */
var State = (function () {
    /**
     * Create a State object.
     */
    function State() {
        /* By default, nothing happens here. Can be overwritten as needed for the speicifc application */
    }
    /**
     * Compute the representation of the updated model.
     * @param { Model } model - The updated model from which the representation is computed
     */
    State.prototype.representation = function (model) {
        /* By default, nothing happens here. Can be overwritten as needed for the speicifc application */
    };
    /**
     * Compute and trigger the next action of the application.
     * @param { Model } model - The updated model from which the next action is computed and trigged.
     */
    State.prototype.nextAction = function (model) {
        /* By default, nothing happens here. Can be overwritten as needed for the speicifc application */
    };
    /**
     * Display method for rendering the view
     * Gets overwritten by Client and Server respectively
     */
    State.prototype.display = function (view) {
        /* Displays the view. Gets overwritten by the specific application it is used for. */
    };
    /**
     * Update method triggering the representation and the next action to be triggered
     * @param { Model } model - The new model
     */
    State.prototype.update = function (model) {
        this.representation(model);
        this.nextAction(model);
    };
    return State;
}());
exports.State = State;
//# sourceMappingURL=state.js.map