import React from "react";
import "./Admin.css";
import axios from "utils";

function Login() {
  return (
    <div className="AdminForm">
      <h2>Admin LogIn</h2>
      <div className="field">
        <label>Admin ID</label>
        <input
          type="text"
          //   value={adminid}
          onChange={(e) => {
            // setAdminid(e.currentTarget.value);
          }}
        />
      </div>
      <div className="field">
        <label>Password</label>
        <input
          type="password"
          //   value={pwd}
          onChange={(e) => {
            // setPwd(e.currentTarget.value);
          }}
        />
      </div>
      <div className="btns">
        <button
          onClick={() => {
            // onLogin();
          }}
        >
          로그인
        </button>
      </div>
    </div>
  );
}

export default Login;
