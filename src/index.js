import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BlogContextProvider } from "./context/blogContext.js";
import { SingleBlogProvider } from "./context/singleBlogContext.js";
import { ProductContextProvider } from "./context/productsContext.js";
import { SingleProductProvider } from "./context/singleProductContext.js";
import { CartContextProvider } from "./context/cartContext.js";

ReactDOM.render(
  <React.StrictMode>
    <BlogContextProvider>
      <SingleBlogProvider>
        <ProductContextProvider>
          <SingleProductProvider>
            <CartContextProvider>
              <App />
            </CartContextProvider>
          </SingleProductProvider>
        </ProductContextProvider>
      </SingleBlogProvider>
    </BlogContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
