import { Outlet } from "react-router-dom";
import { signoutAction, useDispatch, useSelector } from "stores";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

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
          <img src="/images/logout.png" />
        </div>
        <div
          className="adminLogoutImg"
          onClick={() => {
            toHome();
          }}
        >
          <img src="/images/home.png" />
          <img src="/images/logo.png" id="adminHlogo" />
        </div>
      </div>

      <br></br>
      <Outlet />
    </div>
  );
}
