import { useNavigate } from "react-router-dom";

import AuthSignInForm from "components/features/auth/AuthSignInForm";

function Login() {
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
