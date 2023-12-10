import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { css } from "@emotion/react";
import { backgroundColor } from "@/constants.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        css={css({
          backgroundColor,
          height: "100%",
        })}
      />
    </BrowserRouter>
  </React.StrictMode>
);
