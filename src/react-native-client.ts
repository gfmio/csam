
import { Component } from "react";

import { Model } from "./model";
import { State } from "./state";

export class ReactNativeClient {
  public rootComponent: any;

  private model: Model;
  private state: State;
  private actions: any;

  constructor(model: Model, state: State, actions: any) {
    this.model = model;
    this.state = state;
    this.actions = actions;

    const that = this;

    this.rootComponent = class ReactNativeApplication extends Component {
      constructor(props: any) {
        super(props);
        // this.state = {};
        // this.state.currentView = undefined;

        that.state.display = (view: any) => {
          // this.state.currentView = view.component;
          that.rootComponent = view.component;
          this.forceUpdate();
        };

        actions.initReactNativeApplication(props);
      }

      public render() {
        // that.state.update(that.model);
        // return that.state.currentView;
        return that.rootComponent;
      }
    };
  }
}

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
