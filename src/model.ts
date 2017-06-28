/**
 * Model module.
 * @module csam/model
 */

import { State } from "./state";

declare var present: any;

export class Model {
  public model: any;
  public state: State;

  constructor(model: any, state: State) {
    /**/
    this.model = model;
    this.state = state;

    present = this.present;
  }

  public present(data: any) {
    if (this.model.present(data)) {
      this.state.update(this.model);
    }
  }
}
