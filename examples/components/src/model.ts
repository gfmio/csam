
import { Model } from "../../../lib/model";
import { HelloWorldState } from "./state";

export class HelloWorldModel extends Model {
  constructor(state: HelloWorldState) {
    super(state);
  }
}
