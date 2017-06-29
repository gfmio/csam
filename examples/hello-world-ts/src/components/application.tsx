
import { component as c } from "../../../../lib/component";
import { Application as App } from "../../../../lib/components/application";

export function Application(props: any, children: any[]) {
  return (
    <App title="Hello World">
      <h1>Hello World</h1>
      <p>Lorem ipsum</p>
    </App>
  );
}
