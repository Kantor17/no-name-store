import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

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
  .App > * {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  .main {
    padding: 10px 0 35px 0;
    flex: 1 1 auto;
  }
  
  ul, ol {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Global />
    <App />
  </>
);
