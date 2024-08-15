import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { signoutAction, useDispatch } from "stores";

export default forwardRef(function ProfileMenu(props, ref) {
  const dispatch = useDispatch();

  function signout() {
    dispatch(signoutAction());
    toast.success("로그아웃 되었습니다");
  }

  return (
    <div id="submenu" ref={ref} {...props}>
      <div className="sm">마이페이지</div>
      <div className="sm">찜레시피</div>
      <div className="sm">뭘로하지</div>
      <div className="sm">
        <Link to="/inquiries">고객문의</Link>
      </div>
      <div className="sm" onClick={signout}>
        로그아웃
      </div>
    </div>
  );
});
