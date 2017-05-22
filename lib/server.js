//
// Server module
//

const express = require('express')
const compression = require('compression');
const toHTML = require('snabbdom-to-html')

module.exports = function(config) {
  //
  // Read config with defaults
  //

  var config = config || {}
  config.port = config.port || process.env.PORT || 3000
  config.host = config.host || process.env.HOST || 'localhost'
  config.publicDir = config.publicDir || './public'

  var model = config.model

  // Express app run function

  config.run = config.run || function(config) {
    return app.listen(config.port, config.host, function() {
      if (config.printLog) {
        console.log('App is listening to http://' +
          String(config.host) + ':' + String(config.port))
      }
    })
  }

  // Express app constructor with default function

  config.createApp = config.createApp || function() {
    const app = express()
    app.use(compression())
    app.use(express.static(config.publicDir))

    // Match all routes and transition into the URL
    app.all('*', function(req, res) {
      config.state.display = function(view) {
        res.status(view.status).send('<!doctype html>\n' + toHTML(view.component))
      }

      config.actions.transitionTo(req.url)
    })

    return app
  }

  // Server constructor

  const Server = function() {
    // Run the server
    this.run = function() {
      return config.run(config)
    }
  }

  // Create Express server
  const app = config.createApp()

  return new Server()
}
