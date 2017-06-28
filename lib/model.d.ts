/**
 * Model module.
 * @module csam/model
 */
import { State } from "./state";
export declare class Model {
    model: any;
    state: State;
    constructor(model: any, state: State);
    present(data: any): void;
}
