"use strict";
exports.__esModule = true;
var ActionRegistry = (function () {
    function ActionRegistry() {
        this.present = function (data) { };
        /* */
    }
    ActionRegistry.prototype.attachModel = function (model) {
        this.present = function (data) { model.present(data); };
    };
    ActionRegistry.prototype.transitionTo = function (url) {
        this.present({ currentUrl: url });
    };
    return ActionRegistry;
}());
exports.ActionRegistry = ActionRegistry;
//# sourceMappingURL=actions.js.map