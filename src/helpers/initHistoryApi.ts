/**
 * initHistoryApi helper module.
 * Provides the initHistoryApi() helper function which sets up the history API in the browser
 * @module csam/client
 */

/**
 * Initialises the history API and links the history API events to the model and state.
 * @param {any} initialModel - The initial data model
 * @param {(data: any) => void} present - The present function to send updates to the model
 * @param {any} state - The state
 */
export function initHistoryApi(initialModel: any, present: (data: any) => void, state: any) {
  if (window.history && "pushState" in history && "replaceState" in history) {
    history.replaceState(initialModel, document.title, document.location.href);

    window.onpopstate = (evt) => {
      if (evt.state) {
        present(evt.state);
      }
    };

    state.nextAction = (model: any) => {
      if (history.state.currentUrl !== model.currentUrl) {
        history.pushState({ currentUrl: model.currentUrl }, document.title, model.currentUrl);
      }
    };
  } else {
    state.nextAction = (model: any) => {
      if (window.location.pathname !== model.currentUrl) {
        window.location.href = model.currentUrl;
      }
    };
  }
}
