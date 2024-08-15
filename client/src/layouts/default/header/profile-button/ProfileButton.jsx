import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useToggle } from "@reactuses/core";
import { toast } from "react-toastify";

import { signoutAction, useDispatch, useSelector } from "stores";
import { AuthModal } from "components/modal/auth";
import { useToggleElement } from "hooks";

export default function ProfileButton() {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const [submenuRef, showSubmenu, toggleSubmenu] = useToggleElement(false);
  const [showAuthForm, toggleAuthForm] = useToggle(false);

  useEffect(() => {
    toggleSubmenu(false);
    toggleAuthForm(false);
  }, [location, user, toggleSubmenu, toggleAuthForm]);

  function signout() {
    dispatch(signoutAction());
    toast.success("로그아웃 되었습니다");
  }

  return (
    <>
      <div
        className="toptopprofile"
        onClick={() => (user ? toggleSubmenu(true) : toggleAuthForm(true))}
      >
        <img id="img" src="/images/profile.png" alt="profile" />
      </div>
      <AuthModal visible={showAuthForm} setVisible={toggleAuthForm} />{" "}
      <div
        id="submenu"
        ref={submenuRef}
        className={showSubmenu ? "" : "!hidden"}
      >
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
    </>
  );
}
