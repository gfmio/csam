//
// Client main script
//

module.exports = function(config) {
  // Client constructor
  const Client = function() {
    // Init method
    this.init = function(initialModel) {
      model.present(initialModel)
    }
  }

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

  // Update the state display function for in-browser operation

  var currentTree = virtualize(document.documentElement)
  state.display = function(view) {
    currentTree = patch(currentTree, view.component)
  }

  // var initialModel = initialModel

  // if (window.history && 'pushState' in history && 'replaceState' in history) {
  //   history.replaceState(initialModel, document.title, document.location.href)

  //   window.onpopstate = function(evt) {
  //     if (evt.state) {
  //       present(evt.state);
  //     }
  //   }

  //   state.nextAction = function(model) {
  //     if (history.state.currentPage != model.currentPage) {
  //       history.pushState({ currentPage: model.currentPage }, document.title, model.currentPage)
  //     }
  //   }
  // } else {
  //   state.nextAction = function(model) {
  //     if (window.location.pathname != model.currentPage) {
  //       window.location.href = model.currentPage
  //     }
  //   }
  // }

  return new Client()
}
