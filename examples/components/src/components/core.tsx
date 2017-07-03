
import { component as c } from "../../../../lib/component";
import { Application as _Application } from "../../../../lib/components/application";
import * as _html from "../../../../lib/components/html";
import { Text as _Text } from "../../../../lib/components/text";
import { View as _View } from "../../../../lib/components/view";
import { Parallax as _Parallax } from "../../../../lib/components/parallax";

//
// Helpers
//

const rem = (n: number) => `${n}rem`;
const lh = (n: number, baseLineHeight: number) => `${n * baseLineHeight}rem`;
const roundTo = (n: number, amount: number = 1.0) => Math.round(n / amount) * amount;

const fontSize = (fs: number, baseLineHeight: number, minBaseLineHeightMultiple = 1.0) => ({
  fontSize: rem(fs),
  lineHeight: lh(roundTo(fs, minBaseLineHeightMultiple), baseLineHeight),
});

const addDefaultProps = (component: (props: any, children: any[]) => any, defaultProps: any) => {
  return ((props: any , children: any[]) => {
    props = props || {};
    // props = Object.assign({}, defaultProps, props);
    // TODO: This needs to be adapted, so that default arguments truly recursively (?) spread
    props = { ...defaultProps, ...props};
    props.style = { ...defaultProps.style, ...props.style};

    return c(component, props, children);
  });
};

//
// Design model
//

export class DesignModel {
  public baseFontSize: string = "1rem";
  public baseLineHeight: number = 1.618;
  // public baseFontFamily = "Comic Sans MS";
  // font: caption, icon, menu, message-box, small-caption, status-bar",
  // https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/
  // https://en.wikipedia.org/wiki/Help:Multilingual_support#Old_Tagalog.2FBaybayin
  // fontFamily: "'Source Han Sans', 'Myriad Arabic', 'Myriad עברית Regular', 'San Francisco', -apple-system, system-ui, '.SFNSText-Regular', BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', icon, sans-serif",
  public baseFontFamily = "'San Francisco', -apple-system, system-ui, '.SFNSText-Regular', BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', icon, sans-serif";
  public defaultPadding = lh(0.5, this.baseLineHeight);
  public defaultMargin = lh(0.5, this.baseLineHeight);

  public colors = {
    black : "#111111",
    white: "#FFFFFF",
  };

  public noPadding = {
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
  };

  public noMargin = {
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  };

  public htmlStyles = {
    height: "100%",
    minHeight: "100%",
  };

  public bodyStyles = {
    ...this.noPadding,
    ...this.noMargin,
    background: this.colors.white,
    color: this.colors.black,
    display: "flex",
    flexDirection: "column",
    fontFamily: this.baseFontFamily,
    fontSize: this.baseFontSize,
    fontWeight: 300,
    lineHeight: this.baseLineHeight,
    minHeight: "100%",
    wordWrap: "break-word",
  };

  public headingStyles = {
    ...this.noPadding,
    ...this.noMargin,
    fontWeight: 200,
  };
  public h1Styles = {
    ...this.headingStyles,
    ...fontSize(2, this.baseLineHeight),
  };
  public h2Styles = {
    ...this.headingStyles,
    ...fontSize(1.8, this.baseLineHeight),
  };
  public h3Styles = {
    ...this.headingStyles,
    ...fontSize(1.6, this.baseLineHeight),
  };
  public h4Styles = {
    ...this.headingStyles,
    ...fontSize(1.4, this.baseLineHeight),
  };
  public h5Styles = {
    ...this.headingStyles,
    ...fontSize(1.2, this.baseLineHeight),
  };
  public h6Styles = {
    ...this.headingStyles,
    ...fontSize(1.0, this.baseLineHeight),
  };

  public pStyles = {
    ...this.noPadding,
    ...this.noMargin,
  };

  public aStyles = {
    color: "inherit",
    textDecoration: "underline",
  };

  public viewStyles = {};
  public headerStyles = {};
  public footerStyles = {};
  public articleStyles = {};
  public navStyles = {};
  public asideStyles = {};

  public figureStyles = {
    ...this.noPadding,
    ...this.noMargin,
  };
  public imgStyles = {
    ...this.noPadding,
    ...this.noMargin,
    maxWidth: "100%",
    width: "100%",
  };

  public emStyles = {
    textStyle: "italic",
  };
  public strongStyles = {
    fontWeight: 600,
  };
  public spanStyles = {
  };

  public parallaxStyles = {
  };

}

// Lists
// Ul, Ol, Li, Dl, Dt, Dd

// A + pseudo styles

//

//
// Core components
//

export const designModel = new DesignModel();

export const Application = addDefaultProps(_Application, { htmlProps: { style: designModel.htmlStyles }, style: designModel.bodyStyles });
export const Text = addDefaultProps(_Text, { style: designModel.pStyles });
export const html = {
  A: addDefaultProps(_html.A, { style: designModel.aStyles }),
  Article: addDefaultProps(_html.Article, { style: designModel.articleStyles }),
  Aside: addDefaultProps(_html.Aside, { style: designModel.asideStyles }),
  Em: addDefaultProps(_html.Em, { style: designModel.emStyles }),
  Figure: addDefaultProps(_html.Figure, { style: designModel.figureStyles }),
  Footer: addDefaultProps(_html.Footer, { style: designModel.footerStyles }),
  H1: addDefaultProps(_html.H1, { style: designModel.h1Styles }),
  H2: addDefaultProps(_html.H2, { style: designModel.h2Styles }),
  H3: addDefaultProps(_html.H3, { style: designModel.h3Styles }),
  H4: addDefaultProps(_html.H4, { style: designModel.h4Styles }),
  H5: addDefaultProps(_html.H5, { style: designModel.h5Styles }),
  H6: addDefaultProps(_html.H6, { style: designModel.h6Styles }),
  Header: addDefaultProps(_html.Header, { style: designModel.headerStyles }),
  Img: addDefaultProps(_html.Img, { style: designModel.imgStyles }),
  Nav: addDefaultProps(_html.Nav, { style: designModel.navStyles }),
  P: addDefaultProps(_html.P, { style: designModel.pStyles }),
  Span: addDefaultProps(_html.Span, { style: designModel.spanStyles }),
  Strong: addDefaultProps(_html.Strong, { style: designModel.strongStyles }),
};
export const View = addDefaultProps(_View, { style: designModel.viewStyles });
export const Parallax = addDefaultProps(_Parallax, { style: designModel.parallaxStyles });
