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
export declare function initHistoryApi(initialModel: any, present: (data: any) => void, state: any): void;
