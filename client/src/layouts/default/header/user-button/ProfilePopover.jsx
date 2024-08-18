import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "components/shadcn/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "components/shadcn/ui/popover";
import { Button } from "components/shadcn/ui/button";
import { Separator } from "components/shadcn/ui/separator";
import { signoutAction, useDispatch } from "stores";

export default function ProfilePopover(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  function signout() {
    dispatch(signoutAction());
    toast.success("로그아웃 되었습니다");
  }

  return (
    <Popover aria-label="profile-popover">
      <PopoverTrigger asChild>
        <Button className="w-10 h-10 rounded-full ml-4">
          <Avatar>
            <AvatarImage
              src={user.profileImage}
              alt={`${user.nickname} profile`}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 mt-1 mr-2">
        <Button variant="none" className="w-full text-lg">
          마이페이지
        </Button>
        <Link to="/inquiries">
          <Button variant="none" className="w-full text-lg">
            고객 문의
          </Button>
        </Link>
        <Button variant="none" className="w-full text-lg">
          찜레시피
        </Button>
        <Separator className="w-full my-2" />
        <Button variant="none" className="w-full text-lg" onClick={signout}>
          로그아웃
        </Button>
      </PopoverContent>
    </Popover>
  );
}
