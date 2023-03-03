import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import store from "./store";
import { Provider } from "react-redux";
import ProductPage from "./pages/ProductPage";

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
  #root > * {
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
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/catalog',
    element: <Catalog />
  },
  {
    path: '/catalog/:id',
    element: <ProductPage />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Global />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
