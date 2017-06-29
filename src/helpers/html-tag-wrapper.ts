
import { component as c } from "../component";

export function htmlTagWrapper(name: string) {
  return (props: any, children: any[]) => {
    return c(name, props, children);
  };
}
