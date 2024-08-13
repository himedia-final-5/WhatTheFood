import "./Admin.css";
import { axios } from "utils";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "stores";

import React, { useState } from "react";
import AuthSignInForm from "components/modal/auth/signin/AuthSignInForm";

function Login() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div className="AdminAdminForm">
      <div className="AdminAdminLogin">Admin LogIn</div>
      <br></br>
      <AuthSignInForm
        setVisible={() => {
          navigate(`/memberList`);
        }}
      />
    </div>
  );
}

export default Login;
