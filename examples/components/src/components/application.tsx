
import { component as c } from "../../../../lib/component";
import { Application as App } from "../../../../lib/components/application";
import { H1, P } from "../../../../lib/components/html";

const noPadding = { padding: 0 };
const noMargin = { margin: 0 };

const headingStyles = Object.assign({}, noPadding, noMargin);

const appStyles = Object.assign({}, noPadding, noMargin, {
  fontFamily: "'Source Han Sans', 'Myriad Arabic', 'Helvetica Neue', Arial, Helvetica, sans-serif",
});

const h1Styles = Object.assign({}, headingStyles, {
  color: "#FF0000",
});

const pStyles = Object.assign({}, noPadding, noMargin, {

});

export function Application(props: any, children: any[]) {
  return (
    <App title="Hello World" style={ appStyles }>
      <H1 style={ h1Styles }>Hello World</H1>
      <P style={ pStyles }>Lorem ipsum</P>
    </App>
  );
}
