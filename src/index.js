import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);
Amplify.configure({
  Auth: {
    identityPoolId: "us-east-1:0272d242-06d9-4c71-8577-3a0acac97cd2",
    region: "us-east-1",
  },
  Interactions: {
    bots: {
      HalifaxFoodie: {
        name: "HalifaxFoodie",
        alias: "$LATEST",
        region: "us-east-1",
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
