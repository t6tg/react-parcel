import React from "react";
const logo = require("../assets/logo.png");
import firebase from "firebase/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

interface Props {
  uiConfig: any;
}

const Login = (props: Props) => {
  return (
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
