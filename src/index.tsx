import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }
  html, body, #root, .App {
    height: 100%;
  }
  .page-wrapper {
    height: 100%;
  }
  ul, ol {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  button {
    cursor: pointer;
    font: inherit;
    background-color: inherit;
    border: none;
  }

  .link {
    transition: 0.12s;
    &:hover {
      color: #777;
    }
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Global />
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
