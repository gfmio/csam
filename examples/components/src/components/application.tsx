
import { component as c } from "../../../../lib/component";
import { Application as App } from "../../../../lib/components/application";
import { Footer, H1, Header } from "../../../../lib/components/html";
import { Parallax } from "../../../../lib/components/parallax";
import { Text } from "../../../../lib/components/text";
import { View } from "../../../../lib/components/view";
import { LoremIpsum } from "./loremipsum";

const baseLineHeight = 1.618;

const noPadding = { padding: 0 };
const noMargin = { margin: 0 };

const oneLineHeightPadding = { padding: `${baseLineHeight}rem` };
const oneLineHeightPaddingTop = { paddingTop: `${baseLineHeight}rem` };

const appStyles = {
  ...noPadding,
  ...noMargin,
  color: "#111111",
  display: "flex",
  flexDirection: "column",
  //
  fontFamily: "'Source Han Sans', 'Myriad Arabic', 'Myriad עברית Regular', 'Helvetica Neue', Helvetica, Tahoma, Arial, sans-serif",
  lineHeight: baseLineHeight,
  minHeight: "100%",
};

const pStyles = {
  ...noPadding,
  ...noMargin,
};

const headingStyles = {
  ...noPadding,
  ...noMargin,
  fontWeight: "200",
};

const h1Styles = { ...headingStyles,
  fontSize: "2.0rem",
  lineHeight: `${2 * 1.618}rem`,
};

const headerStyles = {
 ...oneLineHeightPadding,
 background: "#111111",
 color: "#FFFFFF",
};

const footerStyles = {
 ...oneLineHeightPadding,
 background: "#111111",
 color: "#FFFFFF",
};

// const figureStyles = {
//   ...noPadding,
//   ...noMargin
// };

// const imgStyles = {
//   ...noMargin,
//   ...noPadding,
//   maxWidth: "100%",
//   width: "100%"
// }

// const View = Div;
// const Text = (props: any, children: any[]) => {
//   if (props.style === undefined) {
//     props.style = {};
//   }
//   props.style = { ...pStyles, ...props.style };
//   return (<P { ...props }>{ children }</P>);
// };
// const InlineText = Span;

export function Application(props: any, children: any[]) {
  return (
    <App title="Hello World" style={ appStyles }>
      <Header style={{ ...headerStyles, flex: 1 }}>
        <H1 style={ h1Styles }>CSAM components</H1>
      </Header>
      <View style={{ flex: 1 }}>
        <Parallax src="/media/flower.jpg" style={{ padding: `${7.0 * baseLineHeight}rem 0` }}>
          <H1 style={{ ...h1Styles, textAlign: "center", fontSize: '5rem', lineHeight: `${5 * 1.618}rem`, color: "#FFFFFF", textShadow: "#111111 0 0 0.5rem" }}>
            Hello World.
          </H1>
        </Parallax>
        <View style={{ ...oneLineHeightPadding }}>
          { /* <Figure style={{ ...figureStyles, ...oneLineHeightPaddingTop }}>
            <Img src="/media/flower.jpg" style={ imgStyles } />
          </Figure> */ }
        { /* </View>
        <View style={{ ...oneLineHeightPadding }}> */ }
          <LoremIpsum />
        </View>
        <Parallax src="/media/flower.jpg" style={{ padding: `${7.0 * baseLineHeight}rem 0` }}>
          <H1 style={{ ...h1Styles, textAlign: "center", fontSize: '5rem', lineHeight: `${5 * 1.618}rem`, color: "#FFFFFF", textShadow: "#111111 0 0 0.5rem" }}>
            { /* Meaningless phrases<Br/>in front of<Br/>beautiful pictures.<Br/> */ }
            Life is Good.
          </H1>
        </Parallax>
      </View>
      <Footer style={ footerStyles }>
        <H1 style={{ ...h1Styles, ...oneLineHeightPaddingTop, textAlign: "right" }}>
          CSAM components
        </H1>
      </Footer>
    </App>
  );
}
