import ProfilePopover from "./ProfilePopover";
import AuthDialog from "./AuthDialog";
import { useSelector } from "stores";

export default function UserButton() {
  const user = useSelector((state) => state.user);

  return user ? <ProfilePopover /> : <AuthDialog />;
}
