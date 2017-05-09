
const h = require('snabbdom/h')

module.exports = function(name, props, children) {
  if (props !== Object(props)) {
    props = {}
  }
  props = { attrs: props }

  if (children !== Object(children)) {
    children = []
  }

  function flatten(a) {
    arr = []
    for (var n in a) {
      var e = a[n]
      if (e instanceof Array) {
        arr = arr.concat(flatten(e))
      } else {
        arr.push(e)
      }
    }
    return arr
  }

  children = flatten(children)

  return h(name, props, children)
}
