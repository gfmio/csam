import { Model } from "./model";
import { State } from "./state";
/** The Server class wrapping the Express server and linking it to the CSAM application model. */
export declare class Server {
    port: number;
    host: string;
    publicDir: string;
    printLog: boolean;
    app: any;
    private model;
    private state;
    private actions;
    /**
     * Create a Server object and set up express.
     * @param { Model } model - The Model of the application
     * @param { State } state - The State of the application
     * @param { any } actions - The list of actions available in the application.
     *                          **Currently requires a member method **`transitionTo(url: String): void`
     * @param { number } port - The port to run the server on. Optional.
     *                          Defaults to the environment variable PORT, if it exists, or 3000.
     * @param { string } host - The host to run the server on. Optional.
     *                          Defaults to the environment variable HOST, if it exists, or localhost.
     * @param { undefined | string } publicDir - The public directory for static files. Optional.
     *                                           Defaults to './public'. Pass `undefined` if you do not
     *                                           want a public directory to be served.
     * @param { boolean } printlog - Flag to activate or deactivate logging. Optional. Default: true.
     */
    constructor(model: Model, state: State, actions: any, port?: number, host?: string, publicDir?: undefined | string, printLog?: boolean);
    /**
     * Starts the server
     */
    start(): any;
    /**
     * Stops the server
     */
    stop(): void;
}
