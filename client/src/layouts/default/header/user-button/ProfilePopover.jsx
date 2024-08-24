import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { signoutAction, useDispatch, useSelector } from "stores";
import { axios } from "utils";

export default function ProfilePopover() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [navigate]);

  function signout() {
    // 사용자가 더이상 사용하지 않는 토큰을 제거하기 위해 서버에 로그아웃 요청을 보냅니다.
    // 로그아웃 성공 여부와 상관없이 로컬 스토리지와 리덕스 스토어에서 사용자 정보를 제거합니다.
    axios
      .post("/api/auth/signout")
      .catch(() => {})
      .finally(() => {
        dispatch(signoutAction());
        toast.success("로그아웃 되었습니다");
      });
  }

  return (
    <Popover aria-label="profile-popover" open={open} onOpenChange={setOpen}>
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
        <Link to={`/members/${user.id}`}>
          <Button variant="none" className="w-full text-lg">
            마이페이지
          </Button>
        </Link>
        <Link to="/inquiries">
          <Button variant="none" className="w-full text-lg">
            고객 문의
          </Button>
        </Link>
        <Link to="/recipes/favorites">
          <Button variant="none" className="w-full text-lg">
            찜레시피
          </Button>
        </Link>
        <Separator className="w-full my-2" />
        <Button variant="none" className="w-full text-lg" onClick={signout}>
          로그아웃
        </Button>
      </PopoverContent>
    </Popover>
  );
}
