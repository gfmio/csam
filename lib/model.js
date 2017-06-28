"use strict";
/**
 * The modyke containing the Model class that stores the state machine driving the application.
 * @module csam/model
 */
exports.__esModule = true;
/** The Model class describing the state machine driving CSAM applications. */
var Model = (function () {
    /*
     * Create a Model object.
     * @param { Model } model - A model data object.
     * @param { State } state - The state object.
     */
    function Model(model, state) {
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
    Model.prototype.present = function (data) {
        if (this.model.present(data)) {
            this.state.update(this.model);
        }
    };
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=model.js.map