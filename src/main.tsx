import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { css } from "@emotion/react";
import { backgroundColor } from "@/constants.js";

function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client
    .init({
      apiKey: "YOUR_API_KEY",
      // Your API key will be automatically added to the Discovery Document URLs.
      discoveryDocs: ["https://people.googleapis.com/$discovery/rest"],
      // clientId and scope are optional if auth is not required.
      clientId: "YOUR_WEB_CLIENT_ID.apps.googleusercontent.com",
      scope: "profile",
    })
    .then(function () {
      // 3. Initialize and make the API request.
      return gapi.client.people.people.get({
        resourceName: "people/me",
        "requestMask.includeField": "person.names",
      });
    })
    .then(
      function (response) {
        console.log(response.result);
      },
      function (reason) {
        console.log("Error: " + reason.result.error.message);
      }
    );
}
// 1. Load the JavaScript client library.
gapi.load("client", start);

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
