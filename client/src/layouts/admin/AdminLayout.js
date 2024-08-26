import { Outlet } from "react-router-dom";
import { signoutAction, useDispatch } from "stores";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./AdminLayout.css";

export default function AdminLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function signout() {
    dispatch(signoutAction());
    toast.success("로그아웃 되었습니다.");
    navigate("/admin");
  }

  function toHome() {
    navigate("/");
  }
  return (
    <div className="adminTotalContainer">
      <br></br>
      <div className="adminIcon">
        <div
          className="adminLogoutImg"
          onClick={() => {
            signout();
          }}
        >
          <img src="/images/logout.png" alt="logout" />
        </div>
        <div
          className="adminLogoutImg"
          onClick={() => {
            toHome();
          }}
        >
          <img src="/images/home.png" alt="home" />
          <img src="/images/logo.png" id="adminHlogo" alt="adminHlogo" />
        </div>
      </div>

      <br></br>
      <Outlet />
    </div>
  );
}
