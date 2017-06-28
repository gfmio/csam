/**
 * State module.
 * @module csam/state
 */
import { Model } from "./model";
export declare class State {
    representation: (model: Model) => void;
    nextAction: (model: Model) => void;
    constructor(representation: (model: Model) => void, nextAction: (model: Model) => void);
    display(view: any): void;
    update(model: any): void;
}
