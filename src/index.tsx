import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import aws_config from "./aws-exports";
import Amplify, { Auth } from "aws-amplify";
import { ApolloProvider } from "react-apollo";
import { Rehydrated } from "aws-appsync-react";
import { BrowserRouter as Router } from "react-router-dom";
import { client } from "./appSyncClient";

Amplify.configure(aws_config);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Rehydrated>
      <Router>
        <App />
      </Router>
    </Rehydrated>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
