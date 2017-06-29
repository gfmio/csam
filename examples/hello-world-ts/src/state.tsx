
import { component as c } from "../../../lib/component";
import { State } from "../../../lib/state";
import { HelloWorldModel } from "./model";

import { Application } from "./components/application";

export class HelloWorldState extends State {
  constructor() {
    super();
  }

  public representation(model: HelloWorldModel) {
    const a = (<Application />);
    // console.log('State', a);
    this.display({
      component: a,
      status: 200,
    });
  }
}
