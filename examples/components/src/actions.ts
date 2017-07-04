
import { ActionRegistry } from "../../../lib/actions";

export class HelloWorldActions extends ActionRegistry {
  public toggleMyAccordion(accordionModel: any, toggledId: number) {
    accordionModel.content[toggledId].open = !(accordionModel.content[toggledId].open);
    this.present({
      viewModel: {
        accordion: accordionModel,
      },
    });
  };
}
