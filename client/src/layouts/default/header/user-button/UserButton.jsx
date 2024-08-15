import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useToggle } from "@reactuses/core";

import ProfilePopover from "./ProfilePopover";
import AuthModal from "./AuthModal";
import { useSelector } from "stores";

export default function UserButton() {
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const [showAuthForm, toggleAuthForm] = useToggle(false);

  useEffect(() => {
    toggleAuthForm(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, user]);

  return user ? (
    <ProfilePopover />
  ) : (
    <>
      <div className="toptopprofile" onClick={toggleAuthForm}>
        <img id="img" src="/images/profile.png" alt="profile" />
      </div>
      <AuthModal visible={showAuthForm} setVisible={toggleAuthForm} />
    </>
  );
}
