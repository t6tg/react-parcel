import React, { useState, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NotFound from "./pages/404";
import firebase from "firebase/app";
import Login from "./components/login";
import Headline from "./components/headline";
import Main from "./pages/main";
require("dotenv").config();
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "cishub-e45f8.firebaseapp.com",
  databaseURL: "https://cishub-e45f8.firebaseio.com",
  projectId: "cishub-e45f8",
  storageBucket: "cishub-e45f8.appspot.com",
  messagingSenderId: "201385624922",
  appId: "1:201385624922:web:2e2a4964e8f2e70239df63'",
  measurementId: "G-TDNXGWS410",
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
  const [IsSignin, setIsSignIn] = useState(null);
  function isLoggedIn() {
    const db = firebase.firestore();
    const usersRef = db
      .collection("users")
      .doc(`${localStorage.getItem("uid")}`);
    usersRef.get().then((docSnapshot) => {
      return docSnapshot.exists;
    });
  }

  const SecuredRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() === true ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
  firebase.auth().onAuthStateChanged((user) => {
    setIsSignIn(!!user);
    try {
      const db = firebase.firestore();
      const usersRef = db
        .collection("users")
        .doc(firebase.auth().currentUser?.uid);
      usersRef.get().then((docSnapshot) => {
        if (!docSnapshot.exists) {
          usersRef.set({
            email: firebase.auth().currentUser?.email,
            name: firebase.auth().currentUser?.displayName,
          });
          localStorage.setItem("uid", `${firebase.auth().currentUser?.uid}`);
        }
        {
          localStorage.setItem("uid", `${firebase.auth().currentUser?.uid}`);
        }
      });
    } catch (error) {}
  });
  return (
    <div>
      <Headline />
      <div className="container mx-auto">
        <Router>
          <Switch>
            <Route exact path="/">
              <Login uiConfig={uiConfig} />
            </Route>
            <SecuredRoute exact path="/main" component={Main} />
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
