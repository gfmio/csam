//
// Model module
// Provide the Model constructor
//

module.exports = function(model, state) {
  const Model = function() {
    this.present = function(data) {
      if (model.present(data)) {
        state.update(model)
      }
    }

    present = this.present
  }

  return new Model()
}