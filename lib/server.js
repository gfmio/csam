"use strict";
/**
 * CSAM server module.
 * Provides the Server class which loads Express and sets up the server environment
 * @module csam/server
 */
exports.__esModule = true;
/**
 * @hidden
 */
var compression = require("compression");
/**
 * @hidden
 */
var express = require("express");
/**
 * @hidden
 */
var toHTML = require("snabbdom-to-html");
// Set up console log for environments where the console does not exist
if (!console) {
    console = { log: function () { } };
}
/** The Server class wrapping the Express server and linking it to the CSAM application model. */
var Server = (function () {
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
    function Server(model, state, actions, port, host, publicDir, printLog) {
        if (publicDir === void 0) { publicDir = "./public"; }
        if (printLog === void 0) { printLog = true; }
        var _this = this;
        //
        // Read config with defaults
        //
        this.port = port || process.env.PORT || 3000;
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
        this.app.all("*", function (req, res) {
            _this.state.display = function (view) {
                res.status(view.status).send("<!doctype html>\n" + toHTML(view.component));
            };
            _this.actions.transitionTo(req.url);
        });
    }
    /**
     * Starts the server
     */
    Server.prototype.start = function () {
        var _this = this;
        return this.app.listen(this.port, this.host, function () {
            if (_this.printLog) {
                console.log("App is listening to http://" + _this.host + ":" + _this.port);
            }
        });
    };
    /**
     * Stops the server
     */
    Server.prototype.stop = function () {
        this.app.close();
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map