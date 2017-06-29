"use strict";
/**
 * The module containing the Model class that stores the state machine driving the application.
 * @module csam/model
 */
exports.__esModule = true;
// declare var present: any;
/** The Model class describing the state machine driving CSAM applications. */
var Model = (function () {
    /*
     * Create a Model object.
     * @param { State } state - The state object.
     */
    function Model(state) {
        this.state = state;
    }
    /*
     * Present method that accepts data and triggers the state to update if necessary.
     * @param { Model } model - A model data object.
     * @param { State } state - The state object.
     */
    Model.prototype.present = function (data) {
        Object.assign(this, data);
        this.state.update(this);
    };
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=model.js.map