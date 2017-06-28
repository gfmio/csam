//
// State module
// Provide the State constructor
//

module.exports = function(config) {
  const State = function() {
    // display method for rendering the view
    // Gets updated in client and server respectively
    this.display = function(view) {}

    // representation function that computes the new view from the model
    this.representation = config.representation

    // nextAction returns the next automatic action function to be executed based on the (new) model
    // Must be a function(model).
    this.nextAction = config.nextAction

    // State update function
    this.update = function(model) {
      this.representation(model)
      this.nextAction(model)
    }
  }

  return new State()
}
