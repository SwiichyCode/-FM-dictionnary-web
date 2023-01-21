import { render } from "preact";
import { Fragment } from "preact";
import { App } from "./app";
import { GlobalStyle } from "./styles/globalStyles";

render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>,
  document.getElementById("app")
);
