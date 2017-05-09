
const h = require('snabbdom/h')

module.exports = function(name, props, children) {
  if (props == null) {
    props = {}
  }
  props = { attrs: props }

  if (children == null) {
    children = []
  }

  return h(name, props, children)
}
