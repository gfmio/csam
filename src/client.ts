/**
 * CSAM client module.
 * Provides the Client() function which loads Snabbdom and sets up the client environment
 * @module csam/client
 */

/**
 * @hidden
 */
declare function require(moduleName: string): any;

/**
 * @hidden
 */
const snabbdom = require("snabbdom");

/**
 * @hidden
 */
const patch = snabbdom.init([
  require("snabbdom/modules/class"),
  require("snabbdom/modules/props"),
  require("snabbdom/modules/attributes"),
  require("snabbdom/modules/style"),
  require("snabbdom/modules/eventlisteners"),
]);

/**
 * @hidden
 */
const virtualize = require("snabbdom-virtualize").default;

import { initHistoryApi } from "./helpers/initHistoryApi";
import { Model } from "./model";
import { State } from "./state";

/* The Client class running CSAM on the client side (e.g. in the browser) */
export class Client {
  private model: Model;
  private state: State;

  /**
   * Create a Client object
   * @param { Model } model - The application model object
   * @param { State} state - The application state object
   */
  constructor(model: Model, state: State) {
    // Load Model, State and Action
    this.model = model;
    this.state = state;
    // this.actions = actions;

    // Virtualize the current DOM tree
    let currentTree = virtualize(document.documentElement);

    // Update state.display to patch the virtual DOM
    state.display = (view: any) => {
      currentTree = patch(currentTree, view.component);
    };
  }

  /**
   * Client side init method. Initialises the History API and presents the initial application state to the model
   * to trigger the reactive loop.
   * @param { any } initialModel: Data to initialise the state machine
   */
  public init(initialModel: any): void {
    // Attach the model and transition events to the history API
    initHistoryApi(initialModel, this.model.present, this.state);

    // Present the initial model to the model to trigger the reactive loop
    this.model.present(initialModel);
  }
}
