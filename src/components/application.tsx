
import { component as c } from "../component";

export function Application(props: any, children: any[]) {
  props = props || {};
  children = children || [];

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        { props.title !== undefined ? <title>{ props.title }</title> : "" }
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width" />

        { props.description !== undefined ? <meta name="description" content={ props.description } /> : "" }
        { props.keywords !== undefined ? <meta name="keywords" content={ props.keywords } /> : "" }

        <link href="/css/csam.css" media="all" rel="stylesheet" />
        { props.favicon !== undefined ? <link rel="icon" type="image/png" href={ props.favicon } /> : "" }
      </head>
      <body>
        { children }
        <script src="/js/app.js" type="text/javascript"></script>
      </body>
    </html>
  );
}
