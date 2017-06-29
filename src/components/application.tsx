
import { component as c } from "../component";
import { Body, Head, Html, Link, Meta, Script, Title } from "./html";

export function Application(props: any, children: any[]) {
  props = props || {};
  children = children || [];

  return (
    <Html>
      <Head>
        <Meta charset="utf-8" />
        { props.title !== undefined ? <Title>{ props.title }</Title> : [] }
        <Meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <Meta http-equiv="Content-Language" content="en" />
        <Meta name="viewport" content="width=device-width" />

        { props.description !== undefined ? <Meta name="description" content={ props.description } /> : [] }
        { props.keywords !== undefined ? <Meta name="keywords" content={ props.keywords } /> : [] }

        <Link href="/css/csam.css" media="all" rel="stylesheet" />
        { props.favicon !== undefined ? <Link rel="icon" type="image/png" href={ props.favicon } /> : [] }
      </Head>
      <Body>
        { children }
        <Script src="/js/app.js" type="text/javascript"></Script>
      </Body>
    </Html>
  );
}
