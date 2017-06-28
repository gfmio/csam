/**
 * Model module.
 * @module csam/model
 */
"use strict";
exports.__esModule = true;
var Model = (function () {
    function Model(model, state) {
        /**/
        this.model = model;
        this.state = state;
        present = this.present;
    }
    Model.prototype.present = function (data) {
        if (this.model.present(data)) {
            this.state.update(this.model);
        }
    };
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=model.js.map