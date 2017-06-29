/**
 * The module containing the Model class that stores the state machine driving the application.
 * @module csam/model
 */
import { State } from "./state";
/** The Model class describing the state machine driving CSAM applications. */
export declare class Model {
    state: State;
    constructor(state: State);
    present(data: any): void;
}
