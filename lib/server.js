//
// Server module
//

const express = require('express')
const compression = require('compression');
const toHTML = require('snabbdom-to-html')
const virtualize = require('snabbdom-virtualize').default

module.exports = function(config) {
  // Server constructor
  const Server = function() {
    // Run the server
    this.run = function(printLog=true) {
      return app.listen(port, host, function() {
        if (printLog) {
          console.log('App is listening to http://' +
            String(host) + ':' + String(port))
        }
      })
    }
  }

  // Read the config
  const port = config.port || 3000
  const host = config.host || '0.0.0.0'
  const publicDir = config.publicDir || './public'

  var model = config.model
  var state = config.state
  var actions = config.actions

  // Create Express server
  const app = express()
  app.use(compression())
  app.use(express.static(publicDir))

  // Match all routes and transition into the URL
  app.all('*', function(req, res) {
    state.display = function(view) {
      res.status(view.status).send('<!doctype html>\n' + toHTML(view.component))
    }

    actions.transitionTo(req.url)
  })

  return new Server()
}
