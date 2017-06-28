"use strict";
/**
 * CSAM client module.
 * Provides the Client() function which loads Snabbdom and sets up the client environment
 * @module csam/client
 */
exports.__esModule = true;
/**
 * @hidden
 */
var snabbdom = require("snabbdom");
/**
 * @hidden
 */
var patch = snabbdom.init([
    require("snabbdom/modules/class"),
    require("snabbdom/modules/props"),
    require("snabbdom/modules/attributes"),
    require("snabbdom/modules/style"),
    require("snabbdom/modules/eventlisteners"),
]);
/**
 * @hidden
 */
var virtualize = require("snabbdom-virtualize")["default"];
var initHistoryApi_1 = require("./helpers/initHistoryApi");
/* The Client class running CSAM on the client side (e.g. in the browser) */
var Client = (function () {
    /**
     * Create a Client object
     * @param { Model } model - The application model object
     * @param { State} state - The application state object
     */
    function Client(model, state) {
        // Load Model, State and Action
        this.model = model;
        this.state = state;
        // this.actions = actions;
        // Virtualize the current DOM tree
        var currentTree = virtualize(document.documentElement);
        // Update state.display to patch the virtual DOM
        state.display = function (view) {
            currentTree = patch(currentTree, view.component);
        };
    }
    /**
     * Client side init method. Initialises the History API and presents the initial application state to the model
     * to trigger the reactive loop.
     * @param { any } initialModel: Data to initialise the state machine
     */
    Client.prototype.init = function (initialModel) {
        // Attach the model and transition events to the history API
        initHistoryApi_1.initHistoryApi(initialModel, this.model.present, this.state);
        // Present the initial model to the model to trigger the reactive loop
        this.model.present(initialModel);
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map