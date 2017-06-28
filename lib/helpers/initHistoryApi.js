"use strict";
/**
 * initHistoryApi helper module.
 * Provides the initHistoryApi() helper function which sets up the history API in the browser
 * @module csam/client
 */
exports.__esModule = true;
/**
 * Initialises the history API and links the history API events to the model and state.
 * @param {any} initialModel - The initial data model
 * @param {(data: any) => void} present - The present function to send updates to the model
 * @param {any} state - The state
 */
function initHistoryApi(initialModel, present, state) {
    if (window.history && "pushState" in history && "replaceState" in history) {
        history.replaceState(initialModel, document.title, document.location.href);
        window.onpopstate = function (evt) {
            if (evt.state) {
                present(evt.state);
            }
        };
        state.nextAction = function (model) {
            if (history.state.currentUrl !== model.currentUrl) {
                history.pushState({ currentUrl: model.currentUrl }, document.title, model.currentUrl);
            }
        };
    }
    else {
        state.nextAction = function (model) {
            if (window.location.pathname !== model.currentUrl) {
                window.location.href = model.currentUrl;
            }
        };
    }
}
exports.initHistoryApi = initHistoryApi;
//# sourceMappingURL=initHistoryApi.js.map