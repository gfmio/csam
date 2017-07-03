
import { Model } from "../../../lib/model";
import { HelloWorldState } from "./state";

import { component as c } from "../../../lib/component";
// import * as html from "../../../lib/components/html";
import { designModel, html, Application, View, Text, Parallax } from "./components/core";
import { LoremIpsum } from "./components/loremipsum";

const Header = html.Header;
const Footer = html.Footer;
const H1 = html.H1;
const H2 = html.H2;
const H3 = html.H3;
const H4 = html.H4;
const H5 = html.H5;
const H6 = html.H6;
const Span = html.Span;

const Ul = html.Ul;
const Ol = html.Ol;
const Li = html.Li;
const Dl = html.Dl;
const Dt = html.Dt;
const Dd = html.Dd;

const Figure = html.Figure;
const Img = html.Img;
const Figcaption = html.Figcaption;

const Video = html.Video;
const Audio = html.Audio;
// const Iframe = html.Iframe;
// // const Embed = html.Embed;

// const Form = html.Form;
// const Fieldset = html.Fieldset;
// const Label = html.Label;
// const Input = html.Input;
// const Textarea = html.Textarea;
// const Select = html.Select;
// const Option = html.Option;
// const Button = html.Button;

export class HelloWorldModel extends Model {
  public currentUrl: string;

  constructor(state: HelloWorldState) {
    super(state);
  }

  public present(data: any) {
    Object.assign(this, data);
    this.state.update(this);
  }

  public currentView() {
    designModel.baseFontFamily = "Comic Sans MS";
    return {
      component: (
        <Application>
          <style>
            { /* This sets the font-size to 3vmin when the body is so wide / high that the font size is at least 16px, i.e. if 3vmin = 3% of the smaller one of screen width and height is at least 16px.*/ }
            { `@media (min-width: ${16*100/3}px) and (min-height: ${16*100/3}px) { html, body { font-size: 3vmin; }}` }
            { `* { box-sizing: border-box; -webkit-font-smoothing: antialiased; text-rendering: geometricPrecision; -moz-osx-font-smoothing: grayscale; white-space: normal; word-wrap: break-word;` }
          </style>
          <Header style={{ background: designModel.colors.black, color: designModel.colors.white, padding: designModel.defaultPadding }}>
            <H1>CSAM Components</H1>
          </Header>
          <Parallax src="/media/flower.jpg" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
            <H1 style={{  ...designModel.h1Styles, textAlign: "center", fontSize: "5rem", lineHeight: `${5 * 1.618}rem`, color: designModel.colors.white, textShadow: `${designModel.colors.black} 0 0 0.5rem` }}>
              <Span on={{ click: (e: any) => { console.log("Hello World"); } }}>Hello World.</Span>
            </H1>
          </Parallax>
          <View style={{ flex: 1, padding: designModel.defaultPadding }}>
            <View style={{ marginLeft: "auto", marginRight: "auto", marginTop: 0, marginBottom: designModel.defaultMargin, maxWidth: "33em" }}>
              <H1>Welcome to the CSAM component overview!</H1>
              <Text style={{ marginTop: designModel.defaultMargin }}>...</Text>

              <H2>Headings</H2>

              <H1>H1</H1>
              <Text>Regular text</Text>
              <H2>H2</H2>
              <Text>Regular text</Text>
              <H3>H3</H3>
              <Text>Regular text</Text>
              <H4>H4</H4>
              <Text>Regular text</Text>
              <H5>H5</H5>
              <Text>Regular text</Text>
              <H6>H6</H6>
              <Text>Regular text</Text>

              <H2>Figures</H2>
              <Figure>
                <Img src="/media/flower.jpg" alt="Some flowers" />
                <Figcaption>Some flowers</Figcaption>
              </Figure>

              <H2>Lists</H2>

              <H3>Unordered Lists</H3>
              <Ul>
                <Li>
                  Item 1
                  <Ul>
                    <Li>
                      Item 1.1
                      <Ul>
                        <Li>
                          Item 1.1.1
                        </Li>
                        <Li>
                          Item 1.1.2
                        </Li>
                        <Li>
                          Item 1.1.3
                        </Li>
                      </Ul>
                    </Li>
                    <Li>
                      Item 1.2
                    </Li>
                    <Li>
                      Item 1.3
                    </Li>
                  </Ul>
                </Li>
                <Li>
                  Item 2
                </Li>
                <Li>
                  Item 3
                </Li>
              </Ul>

              <H3>Ordered Lists</H3>
              <Ol>
                <Li>
                  Item 1
                  <Ol>
                    <Li>
                      Item 1.1
                      <Ol>
                        <Li>
                          Item 1.1.1
                        </Li>
                        <Li>
                          Item 1.1.2
                        </Li>
                        <Li>
                          Item 1.1.3
                        </Li>
                      </Ol>
                    </Li>
                    <Li>
                      Item 1.2
                    </Li>
                    <Li>
                      Item 1.3
                    </Li>
                  </Ol>
                </Li>
                <Li>
                  Item 2
                </Li>
                <Li>
                  Item 3
                </Li>
              </Ol>

              <H3>Description Lists</H3>
              <Dl>
                <Dt>Description Title (dt)</Dt>
                <Dd>Description Text (dd)</Dd>
                <Dt>Description Title (dt)</Dt>
                <Dd>Description Text (dd)</Dd>
                <Dt>Description Title (dt)</Dt>
                <Dd>Description Text (dd)</Dd>
              </Dl>

              <H2>Audio & Video</H2>
              <H3>Audio</H3>
              <Audio></Audio>
              <H3>Video</H3>
              <Video></Video>

              <H2>Responsive iFrames & Embeds</H2>

              <Text>...tbi...</Text>

              <H2>Tables</H2>

              <Text>...tbi...</Text>

              <H2>Forms</H2>

              <Text>...tbi...</Text>

              <H2>Buttons</H2>

              <Text>...tbi...</Text>

              <H2>Graphs and Visualisations</H2>

              <Text>...tbi...</Text>

              <H2>Cards</H2>

              <Text>...tbi...</Text>

              <H2>Grids</H2>

              <Text>...tbi...</Text>

              <H2>Icons</H2>

              <Text>...tbi...</Text>

            </View>
            <View style={{ marginLeft: "auto", marginRight: "auto", marginTop: designModel.defaultMargin, marginBottom: designModel.defaultMargin, maxWidth: "33em" }}>
              <LoremIpsum />
            </View>
          </View>
          <Parallax src="/media/flower.jpg" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
            <Text style={{ ...designModel.h1Styles, textAlign: "center", fontSize: "5rem", lineHeight: `${5 * 1.618}rem`, color: designModel.colors.white, textShadow: `${designModel.colors.black} 0 0 0.5rem` }}>
              Life is good.
            </Text>
          </Parallax>
          <Footer style={{ background: designModel.colors.black, color: designModel.colors.white, padding: designModel.defaultPadding }}>
            <Text style={{ ...designModel.h1Styles, textAlign: "right" }}>CSAM Components</Text>
          </Footer>
        </Application>
      ),
      status: 200,
    };
  }
}
