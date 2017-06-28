/**
 * CSAM server module.
 * Provides the Server() function which loads Express and sets up the server environment
 * @module csam/server
 */
"use strict";
exports.__esModule = true;
var compression = require("compression");
var express = require("express");
var toHTML = require("snabbdom-to-html");
if (!console) {
    console = { log: function () { } };
}
var Server = (function () {
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
        this.app.use(express.static(this.publicDir));
        // Match all routes and transition into the URL
        this.app.all("*", function (req, res) {
            _this.state.display = function (view) {
                res.status(view.status).send("<!doctype html>\n" + toHTML(view.component));
            };
            _this.actions.transitionTo(req.url);
        });
    }
    // Express app start function
    Server.prototype.start = function () {
        var _this = this;
        return this.app.listen(this.port, this.host, function () {
            if (_this.printLog) {
                console.log("App is listening to http://{ this.host }:{ this.port }");
            }
        });
    };
    Server.prototype.stop = function () {
        this.app.close();
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map