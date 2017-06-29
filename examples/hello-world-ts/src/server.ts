
import { Server } from "../../../lib/server";
import { helloWorldActions } from "./actions";
import { HelloWorldModel } from "./model";
import { HelloWorldState } from "./state";

const state = new HelloWorldState();
const model = new HelloWorldModel(state);
const actions = helloWorldActions(model);

const s = new Server(
  model,
  state,
  actions,
  3000,
  "localhost",
  "./dist/public",
  true);

s.start();
