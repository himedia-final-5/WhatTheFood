import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useToggle } from "@reactuses/core";

import AuthModal from "./AuthModal";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "stores";
import { useToggleElement } from "hooks";

export default function UserButton() {
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const [submenuRef, showSubmenu, toggleSubmenu] = useToggleElement(false);
  const [showAuthForm, toggleAuthForm] = useToggle(false);

  useEffect(() => {
    toggleSubmenu(false);
    toggleAuthForm(false);
  }, [location, user, toggleSubmenu, toggleAuthForm]);

  return (
    <>
      <div
        className="toptopprofile"
        onClick={() => (user ? toggleSubmenu(true) : toggleAuthForm(true))}
      >
        <img id="img" src="/images/profile.png" alt="profile" />
      </div>
      <AuthModal visible={showAuthForm} setVisible={toggleAuthForm} />
      <ProfileMenu ref={submenuRef} className={showSubmenu ? "" : "!hidden"} />
    </>
  );
}
