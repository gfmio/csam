//
// Client main script
//

module.exports = function(config) {
  // Load Snabbdom and other required libraries

  const snabbdom = require('snabbdom')
  const patch = snabbdom.init([
    require('snabbdom/modules/class'),
    require('snabbdom/modules/props'),
    require('snabbdom/modules/attributes'),
    require('snabbdom/modules/style'),
    require('snabbdom/modules/eventlisteners')
  ])
  const h = require('snabbdom/h')
  const virtualize = require('snabbdom-virtualize').default

  // Load Model, State and Action

  var model = config.model
  var state = config.state
  var actions = config.actions

  // Client constructor

  const Client = function() {
    // Init method
    this.init = function(initialModel) {
      var currentTree = virtualize(document.documentElement)
      state.display = function(view) {
        currentTree = patch(currentTree, view.component)
      }

      // Update the state display function for in-browser operation

      var initialModel = initialModel

      if (window.history && 'pushState' in history && 'replaceState' in history) {
        history.replaceState(initialModel, document.title, document.location.href)

        window.onpopstate = function(evt) {
          if (evt.state) {
            present(evt.state);
          }
        }

        state.nextAction = function(model) {
          if (history.state.currentUrl != model.currentUrl) {
            history.pushState({ currentUrl: model.currentUrl }, document.title, model.currentUrl)
          }
        }
      } else {
        state.nextAction = function(model) {
          if (window.location.pathname != model.currentUrl) {
            window.location.href = model.currentUrl
          }
        }
      }

      model.present(initialModel)
    }
  }

  return new Client()
}
