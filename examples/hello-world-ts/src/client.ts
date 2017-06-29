//
// Client side script
//

import { Client } from "../../../lib/client";
// import { helloWorldActions } from "./actions";
import { HelloWorldModel } from "./model";
import { HelloWorldState } from "./state";

(function main(){
  const state = new HelloWorldState();
  const model = new HelloWorldModel(state);
  // const actions = helloWorldActions(model);

  const c = new Client(model, state);
  c.init({
    currentUrl: window.location.pathname,
  });
})();
