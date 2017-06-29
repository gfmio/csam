"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var ReactNativeClient = (function () {
    function ReactNativeClient(model, state, actions) {
        this.model = model;
        this.state = state;
        this.actions = actions;
        var that = this;
        this.rootComponent = (function (_super) {
            __extends(ReactNativeApplication, _super);
            function ReactNativeApplication(props) {
                var _this = _super.call(this, props) || this;
                // this.state = {};
                // this.state.currentView = undefined;
                that.state.display = function (view) {
                    // this.state.currentView = view.component;
                    that.rootComponent = view.component;
                    _this.forceUpdate();
                };
                actions.initReactNativeApplication(props);
                return _this;
            }
            ReactNativeApplication.prototype.render = function () {
                // that.state.update(that.model);
                // return that.state.currentView;
                return that.rootComponent;
            };
            return ReactNativeApplication;
        }(react_1.Component));
    }
    return ReactNativeClient;
}());
exports.ReactNativeClient = ReactNativeClient;
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// CsamView = reactNativeWrapper(View)
// CsamText = reactNativeWrapper(Text)
// export default class TestProject extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0
//     }
//     setInterval(() => {
//       this.setState(previousState => {
//         counter: previousState.counter = previousState.counter + 1
//       })
//       this.forceUpdate()
//     }, 0)
//   }
//   render() {
//     var props = Object.assign({}, this.state, this.props)
//     console.log(props.counter)
//     return Application(props, this.children)
//   }
// }
//# sourceMappingURL=react-native-client.js.map