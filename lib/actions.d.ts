import { Model } from "./model";
export declare class ActionRegistry {
    constructor();
    attachModel(model: Model): void;
    transitionTo(url: string): void;
    private present;
}
