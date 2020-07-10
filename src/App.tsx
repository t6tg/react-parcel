import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./pages/404";
import firebase from "firebase/app";
import Login from "./components/login";
import Headline from "./components/headline";
require("dotenv").config();
require("firebase/auth");

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "cishub-e45f8.firebaseapp.com",
  databaseURL: "https://cishub-e45f8.firebaseio.com",
  projectId: "cishub-e45f8",
  storageBucket: "cishub-e45f8.appspot.com",
  messagingSenderId: "201385624922",
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};
const uiConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccess: () => false,
  },
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <div>
      <Headline />
      <div className="container mx-auto">
        <Router>
          <Switch>
            <Route exact path="/">
              <Login uiConfig={uiConfig} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
