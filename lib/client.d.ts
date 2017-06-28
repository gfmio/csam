import { Model } from "./model";
import { State } from "./state";
export declare class Client {
    private model;
    private state;
    /**
     * Create a Client object
     * @param { Model } model - The application model object
     * @param { State} state - The application state object
     */
    constructor(model: Model, state: State);
    /**
     * Client side init method. Initialises the History API and presents the initial application state to the model
     * to trigger the reactive loop.
     * @param { any } initialModel: Data to initialise the state machine
     */
    init(initialModel: any): void;
}
