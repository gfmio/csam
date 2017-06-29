/**
 * CSAM server module.
 * Provides the Server class which loads Express and sets up the server environment
 * @module csam/server
 */

/**
 * @hidden
 */
declare function require(moduleName: string): any;

import { Model } from "./model";
import { State } from "./state";

/**
 * @hidden
 */
const compression = require("compression");
/**
 * @hidden
 */
const express = require("express");
/**
 * @hidden
 */
const toHTML = require("snabbdom-to-html");

// Set up console log for environments where the console does not exist
if (!console) {
  console = ({ log: () => {/**/}} as any);
}

/** The Server class wrapping the Express server and linking it to the CSAM application model. */
export class Server {
  public port: number;
  public host: string;
  public publicDir: string;
  public printLog: boolean;

  // app is public, so it can be configured further and customised as needed
  public app: any;

  private model: Model;
  private state: State;
  private actions: any;

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
  constructor(model: Model,
              state: State,
              actions: any,
              port?: number,
              host?: string,
              publicDir: undefined | string = "./public",
              printLog: boolean = true) {
    //
    // Read config with defaults
    //
    this.port = port || process.env.PORT as (undefined | number) || 3000;
    this.host = host || process.env.HOST || "localhost";
    this.publicDir = publicDir;
    this.printLog = printLog;

    this.model = model;
    this.state = state;
    this.actions = actions;

    // Express app constructor with default function

    this.app = express();
    this.app.use(compression());
    // Serve the static directory at this.publicDir, unless the variable is undefined
    if (this.publicDir !== undefined) {
      this.app.use(express.static(this.publicDir));
    }

    // Match all routes and transition into the URL
    this.app.all("*", (req: any, res: any) => {
      this.state.display = (view: any) => {
        res.status(view.status).send("<!doctype html>\n" + toHTML(view.component));
      };

      this.actions.transitionTo(req.url);
    });
  }

  /**
   * Starts the server
   */
  public start() {
    return this.app.listen(this.port, this.host, () => {
      if (this.printLog) {
        console.log(`App is listening to http://${ this.host }:${ this.port }`);
      }
    });
  }

  /**
   * Stops the server
   */
  public stop() {
    this.app.close();
  }
}
