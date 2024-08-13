import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="adminTotalContainer">
      <br></br>
      <div className="adminLogoutImg">
        <img src="/images/logout.png" />
      </div>

      <br></br>
      <Outlet />
    </div>
  );
}
