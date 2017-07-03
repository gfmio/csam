
import { Model } from "../../../lib/model";
import { HelloWorldState } from "./state";

import { component as c } from "../../../lib/component";
// import * as html from "../../../lib/components/html";
import { designModel, html, Application, View, Text, Parallax } from "./components/core";
import { LoremIpsum } from "./components/loremipsum";

const Header = html.Header;
const Footer = html.Footer;
const H1 = html.H1;
const Span = html.Span;

// const Ul = html.Ul;
// const Ol = html.Ol;
// const Li = html.Li;
// const Dl = html.Dl;
// const Dt = html.Dt;
// const Dl = html.Dl;

// const Figure = html.Figure;
// const Img = html.Img;
// const Figcaption = html.Figcaption;

// const Video = html.Video;
// const Audio = html.Audio;
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
              <Text>...</Text>

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
