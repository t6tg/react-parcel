import React, { useState } from "react";
const logo = require("../assets/logo.png");
import firebase from "firebase/app";
import { Redirect } from "react-router-dom";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const Login = (props) => {
  function isLoggedIn() {
    const db = firebase.firestore();
    const usersRef = db
      .collection("users")
      .doc(`${localStorage.getItem("uid")}`);
    // return true;
  }

  return isLoggedIn() !== false ? (
    <Redirect to="/main" />
  ) : (
    <div className="mt-10">
      <div className="flex justify-center">
        <img className="" src={logo} alt="logo" width="200px" />
      </div>
      <h1 className="text-2xl xl:text-3xl text-center">
        <b>
          คลังเอกสารประกอบการเรียน <br />
          #ส่งต่อความรู้ไม่มีสิ้นสุด
        </b>
      </h1>
      <StyledFirebaseAuth
        className="mt-10"
        uiConfig={props.uiConfig}
        firebaseAuth={firebase.auth()}
      />
      <p className="text-center mt-10 text-sm">
        เข้าสู่ระบบได้เฉพาะนักศึกษาที่ใช้อีเมลของ <br />
        มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือเท่านั้น
      </p>
    </div>
  );
};

export default Login;
