/**
 * CSAM client module.
 * Provides the Client() function which loads Snabbdom and sets up the client environment
 * @module csam/client
 */

declare function require(moduleName: string): any;

import { initHistoryApi } from "./helpers/initHistoryApi";

export function Client(config: any, initialModel: any): void {
  const snabbdom = require("snabbdom");

  const patch = snabbdom.init([
    require("snabbdom/modules/class"),
    require("snabbdom/modules/props"),
    require("snabbdom/modules/attributes"),
    require("snabbdom/modules/style"),
    require("snabbdom/modules/eventlisteners"),
  ]);

  // const h = require("snabbdom/h");

  const virtualize = require("snabbdom-virtualize").default;

  // Load Model, State and Action

  const model: any = config.model;
  const state: any = config.state;
  // let actions = config.actions;

  // Virtualize the current DOM tree

  let currentTree = virtualize(document.documentElement);

  // Update state.display to patch the virtual DOM

  state.display = (view: any) => {
    currentTree = patch(currentTree, view.component);
  };

  // Attach the model and transition events to the history API

  initHistoryApi(initialModel, model.present, state);

  // Present the initial model to the model to trigger the reactive loop

  model.present(initialModel);
}
