/**
 * CSAM client module.
 * Provides the Client() function which loads Snabbdom and sets up the client environment
 * @module csam/client
 */
"use strict";
exports.__esModule = true;
var initHistoryApi_1 = require("./helpers/initHistoryApi");
function Client(config, initialModel) {
    var snabbdom = require("snabbdom");
    var patch = snabbdom.init([
        require("snabbdom/modules/class"),
        require("snabbdom/modules/props"),
        require("snabbdom/modules/attributes"),
        require("snabbdom/modules/style"),
        require("snabbdom/modules/eventlisteners"),
    ]);
    // const h = require("snabbdom/h");
    var virtualize = require("snabbdom-virtualize")["default"];
    // Load Model, State and Action
    var model = config.model;
    var state = config.state;
    // let actions = config.actions;
    // Virtualize the current DOM tree
    var currentTree = virtualize(document.documentElement);
    // Update state.display to patch the virtual DOM
    state.display = function (view) {
        currentTree = patch(currentTree, view.component);
    };
    // Attach the model and transition events to the history API
    initHistoryApi_1.initHistoryApi(initialModel, model.present, state);
    // Present the initial model to the model to trigger the reactive loop
    model.present(initialModel);
}
exports.Client = Client;
//# sourceMappingURL=client.js.map