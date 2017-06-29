
import { Model } from "./model";

export class ActionRegistry {
  constructor() {
    /* */
  }

  public attachModel(model: Model) {
    this.present = (data: any) => { model.present(data); };
  }

  public transitionTo(url: string): void {
    this.present({ currentUrl: url });
  }

  private present: (data: any) => void = (data: any) => { /**/ };
}
