
const h = require('snabbdom/h')

module.exports = function(name, props, children) {
  if (props !== Object(props)) {
    props = {}
  }

  var on = {}
  if ('on' in props) {
    on = props.on
    delete props['on']
  }

  var style = {}
  if ('style' in props) {
    style = props.style
    delete props['style']
  }

  props = { attrs: props, on: on, style: style }

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
