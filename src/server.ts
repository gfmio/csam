/**
 * CSAM server module.
 * Provides the Server() function which loads Express and sets up the server environment
 * @module csam/client
 */

declare function require(moduleName: string): any;

const compression = require("compression");
const express = require("express");
const toHTML = require("snabbdom-to-html");

if (!console) {
  console = ({ log: () => {/**/}} as any);
}

export class Server {
  public port: number;
  public host: string;
  public publicDir: string;
  public printLog: boolean;

  private app: any;

  private model: any;
  private state: any;
  private actions: any;

  constructor(model: any,
              state: any,
              actions: any,
              port?: number,
              host?: string,
              publicDir: string = "./public",
              printLog: boolean = true) {
    //
    // Read config with defaults
    //
    this.port = port || process.env.PORT as (number | undefined) || 3000;
    this.host = host || process.env.HOST || "localhost";
    this.publicDir = publicDir;
    this.printLog = printLog;

    this.model = model;
    this.state = state;
    this.actions = actions;

    // Express app constructor with default function

    this.app = express();
    this.app.use(compression());
    this.app.use(express.static(this.publicDir));

    // Match all routes and transition into the URL
    this.app.all("*", (req: any, res: any) => {
      this.state.display = (view: any) => {
        res.status(view.status).send("<!doctype html>\n" + toHTML(view.component));
      };

      this.actions.transitionTo(req.url);
    });
  }

  // Express app run function
  public run() {
    return this.app.listen(this.port, this.host, () => {
      if (this.printLog) {
        console.log("App is listening to http://{ this.host }:{ this.port }");
      }
    });
  }

  public stop() {
    this.app.close();
  }
}
