
import { component as c } from "../../../../lib/component";
import { Application as App } from "../../../../lib/components/application";
import { A, Footer, H1, Header, Li, Ul } from "../../../../lib/components/html";
import { Parallax } from "../../../../lib/components/parallax";
import { Text } from "../../../../lib/components/text";
import { View } from "../../../../lib/components/view";
import { LoremIpsum } from "./loremipsum";
import { Playground } from "./playground";

const baseLineHeight = 1.618;

const noPadding = { paddingLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 0 };
const noMargin = { marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0 };

const oneLineHeightPadding = { padding: `${baseLineHeight}rem` };
const oneLineHeightPaddingTop = { paddingTop: `${baseLineHeight}rem` };

const appStyles = {
  ...noPadding,
  ...noMargin,
  color: "#111111",
  display: "flex",
  flexDirection: "column",
  // font: caption, icon, menu, message-box, small-caption, status-bar",
  // https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/
  // https://en.wikipedia.org/wiki/Help:Multilingual_support#Old_Tagalog.2FBaybayin
  // fontFamily: "'Source Han Sans', 'Myriad Arabic', 'Myriad עברית Regular', 'San Francisco', -apple-system, system-ui, '.SFNSText-Regular', BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', icon, sans-serif",
  fontFamily: "'San Francisco', -apple-system, system-ui, '.SFNSText-Regular', BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', icon, sans-serif",
  lineHeight: baseLineHeight,
  minHeight: "100%",
  wordWrap: "break-word"
};

// const pStyles = {
//   ...noPadding,
//   ...noMargin,
// };

const headingStyles = {
  ...noPadding,
  ...noMargin,
  fontWeight: "200",
};

const h1Styles = {
  ...headingStyles,
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

        <View style={ { ...oneLineHeightPadding, fontSize: "3vmin", margin: "0 auto", maxWidth: "33em" } }>
          <Playground />
        </View>

        <View style={ { ...oneLineHeightPadding, fontSize: "3vmin", margin: "0 auto", maxWidth: "33em" } }>
          <H1 style={ h1Styles }>To Do</H1>
          <Text>
            An overview of important and potential design elements from other design frameworks.
          </Text>
          <Ul>
            <Li>Integrate CSS reset</Li>
            <Li>Pseudo selectors (e.g. <code>p + p</code>, <code>:first-child</code>, <code>:hover</code>)</Li>
            <Li>Styling
              <Ul>
                <Li>Colors + color scales / schemes</Li>
                <Li>Fonts</Li>
                <Li>Paddings</Li>
                <Li>Margins</Li>
                <Li>Rule widths</Li>
                <Li>Rounding</Li>
                <Li>Default style groups (e.g. text, filled-buttons, border-buttons, ...)</Li>
              </Ul>
            </Li>
            <Li>Basic typography, Text, Headings, Paragraphs, Links, blockquote</Li>
            <Li>Lists</Li>
            <Li>Images</Li>
            <Li>Videos</Li>
            <Li>Audio</Li>
            <Li>Responsive embeds</Li>
            <Li>Icons</Li>
            <Li>Emojis</Li>
            <Li>Forms
              <Ul>
                <Li>Selects</Li>
                <Li>Multiple Selects</Li>
                <Li>File upload fields, in particular for images</Li>
                <Li>Validation styling</Li>
                <Li>Checkboxes, Radio buttons and groups thereof</Li>
                <Li>Date fields</Li>
                <Li>(Search) input with suggestions</Li>
              </Ul>
            </Li>
            <Li>Buttons</Li>
            <Li>CSS Transforms</Li>
            <Li>CSS Animations</Li>
            <Li>LTR + RTL design support (should "flip" the page design)</Li>
            <Li>Code tools (<code>{'<code>'}</code> and <code>{'<pre>'}</code>)</Li>
            <Li>Flexbox + Flexbox shim for old browsers</Li>
            <Li>Grid</Li>
            <Li>Header, Footer, Navbar, stickyness</Li>
            <Li>Scroll spy events + animation</Li>
            <Li>Parallax</Li>
            <Li>Full-screen / element pictures</Li>
            <Li>Overlays (e.g. on hover)</Li>
            <Li>Modals</Li>
            <Li>Hero units</Li>
            <Li>Off-canvas (in particular for navigation)</Li>
            <Li>Carousel / Orbit</Li>
            <Li>SVG + Inline SVG</Li>
            <Li>GIFs</Li>
            <Li>Graphs</Li>
            <Li>Canvas</Li>
            <Li>Print stylesheets</Li>
            <Li>Accessibility ARIA attributes</Li>
            <Li>Accordions</Li>
            <Li>Accordion Menu</Li>
            <Li>Badge</Li>
            <Li>Breadcrumbs</Li>
            <Li>Callout / Alerts</Li>
            <Li>Close Button</Li>
            <Li>Drilldown Menu</Li>
            <Li>Dropdowns</Li>
            <Li>Dropdown Menus</Li>
            <Li>Dropdown Menu</Li>
            <Li>Equalizer (?)</Li>
            <Li>Float (might not be useful / necessary with flexbox) / Align</Li>
            <Li>Label / Tags</Li>
            <Li>Media Object ?</Li>
            <Li>Menu</Li>
            <Li>Pagination</Li>
            <Li>Progress bars</Li>
            <Li>Modals / Reveals</Li>
            <Li>Sliders</Li>
            <Li>Sticky (stuff that sticks to the top of your screen + some offset when you scroll for a certain duration)</Li>
            <Li>Table</Li>
            <Li>Tabs + Switchers</Li>
            <Li>Thumbnails + Lightbox view</Li>
            <Li>Toggles</Li>
            <Li>Tooltips</Li>
            <Li>Popovers</Li>
            <Li>Visibility</Li>
            <Li>Elements in Emails?!</Li>
            <Li>Alerts / Confirmation modals / Dialogs etc.</Li>
            <Li>Button groups</Li>
            <Li>Cards + Cards with media elements</Li>
            <Li>Collapse</Li>
            <Li>Collapsible list</Li>
            <Li>Right click context menus</Li>
            <Li>Editable text / content-editable</Li>
            <Li>Date + time display</Li>
            <Li>Currency display</Li>
            <Li>Internaitonalisation support</Li>
            <Li>Hotkeys !!</Li>
            <Li>Non-ideal state</Li>
            <Li>Toasts</Li>
            <Li>Tree navigation (e.g. for file system)</Li>
            <Li>Text with Columns</Li>
            <Li>Comment</Li>
            <Li>Dividers</Li>
            <Li>Dotnav (could be component in Carousel)</Li>
            <Li>Grid Parallax</Li>
            <Li>Light / Dark / Inverse (?)</Li>
            <Li>Marker</Li>
            <Li>Maps</Li>
            <Li>Position Hooks</Li>
            <Li>Scroll to element</Li>
            <Li>Sections, Articles</Li>
            <Li>Sortables</Li>
            <Li>Spinners</Li>
            <Li>Tiles</Li>
            <Li>Panels</Li>
            <Li>Resizables</Li>
            <Li>Match Height</Li>
            <Li>Drop cap</Li>
            <Li>Box shadow</Li>
            <Li>Leader (name...........................Price)</Li>
            <Li>Logo</Li>
            <Li>Blend modes (!! https://css-tricks.com/almanac/properties/b/background-blend-mode/)</Li>
            <Li>Striped background + Gradients + other patterns</Li>
            <Li>Disabled</Li>
            <Li>Drag</Li>
            <Li>Width (?)</Li>
            <Li>Gesture events</Li>
          </Ul>
          <Text>
            See also:
          </Text>
          <Ul>
            <Li><A href="http://foundation.zurb.com/sites/docs/kitchen-sink.html#0">http://foundation.zurb.com/sites/docs/kitchen-sink.html#0</A></Li>
            <Li><A href="http://blueprintjs.com/docs">http://blueprintjs.com/docs</A></Li>
            <Li><A href="https://getuikit.com/docs/">https://getuikit.com/docs/</A></Li>
          </Ul>
        </View>

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
