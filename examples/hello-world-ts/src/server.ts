
import { Server } from "../../../lib/server";
import { HelloWorldActions } from "./actions";
import { HelloWorldModel } from "./model";
import { HelloWorldState } from "./state";

const actions = new HelloWorldActions();
const state = new HelloWorldState(actions);
const model = new HelloWorldModel(state);
actions.attachModel(model);

const s = new Server(
  model,
  state,
  actions,
  3000,
  "localhost",
  "./dist/public",
  true);

s.start();
