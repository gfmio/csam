import { Model } from "./model";
import { State } from "./state";
export declare class ReactNativeClient {
    rootComponent: any;
    private model;
    private state;
    private actions;
    constructor(model: Model, state: State, actions: any);
}
