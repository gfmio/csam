/**
 * initHistoryApi helper module.
 * Provides the initHistoryApi() helper function which sets up the history API in the browser
 * @module csam/client
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
