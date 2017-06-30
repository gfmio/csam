//
// Client side script
//

import { Client } from "../../../lib/client";
import { HelloWorldActions } from "./actions";
import { HelloWorldModel } from "./model";
import { HelloWorldState } from "./state";

(function main(){
  const actions = new HelloWorldActions();
  const state = new HelloWorldState(actions);
  const model = new HelloWorldModel(state);
  actions.attachModel(model);

  const c = new Client(model, state);
  c.init({
    currentUrl: window.location.pathname,
  });
})();
