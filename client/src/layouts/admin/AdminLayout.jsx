import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IconLogout } from "@tabler/icons-react";

import "./AdminLayout.css";
import { signoutAction, useDispatch } from "@stores";
import LogoYorijoriMain from "@components/asset/LogoYorijoriMain";

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
      <header className="adminIcon">
        <button onClick={toHome}>
          <LogoYorijoriMain className="h-10" />
        </button>
        <button onClick={signout}>
          <IconLogout className="w-20 h-20" />
        </button>
      </header>
      <Outlet />
    </div>
  );
}
