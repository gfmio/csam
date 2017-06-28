/**
 * State module.
 * @module csam/state
 */
"use strict";
exports.__esModule = true;
var State = (function () {
    function State(representation, nextAction) {
        this.representation = representation;
        this.nextAction = nextAction;
    }
    // display method for rendering the view
    // Gets updated in client and server respectively
    State.prototype.display = function (view) {
        /**/
    };
    State.prototype.update = function (model) {
        this.representation(model);
        this.nextAction(model);
    };
    return State;
}());
exports.State = State;
//# sourceMappingURL=state.js.map