import * as React from "react";
import { Helmet } from "react-helmet";

export function SEO(props) {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <title>{props.title}</title>
      <link rel="shortcut icon" href="https://dimensiondev.github.io/dapp-website/favicon.ico" />
    </Helmet>
  );
}
