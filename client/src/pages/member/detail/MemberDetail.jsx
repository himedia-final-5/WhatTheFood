import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";

import { LoadingRender, NotFoundRender } from "layouts/fallback";
import { axios } from "utils";
import { usePromise } from "hooks";

import MemberProfileCard from "./MemberProfileCard";
import MemberProfileContent from "./MemberProfileContent";

/** @type {React.Context<{profile: MemberProfileDetail, fetchProfile: () => void, followDialogMode: boolean, setFollowDialogMode: React.Dispatch<React.SetStateAction<boolean>}>} */
const MemberDetailContext = createContext();

export const useMemberDetail = () => {
  const context = useContext(MemberDetailContext);
  if (!context) {
    throw new Error(
      "useMemberDetail must be used within a MemberDetailProvider",
    );
  }
  return context;
};

export default function MemberDetail() {
  const { id } = useParams();
  const [followDialogMode, setFollowDialogMode] = useState(true);
  const [fetchProfile, profile, , error] = usePromise(
    null,
    useCallback(
      /** @type {() => Promise<MemberProfileDetail} */
      async () => (await axios.get(`/api/members/${id}/profile`)).data,
      [id],
    ),
  );

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return profile === null ? (
    <LoadingRender message="회원 정보를 불러오는 중입니다" />
  ) : error ? (
    <NotFoundRender message="회원 정보를 찾을 수 없습니다" />
  ) : (
    <MemberDetailContext.Provider
      value={{
        profile,
        fetchProfile,
        followDialogMode,
        setFollowDialogMode,
      }}
    >
      <div className="flex flex-col flex-1 w-full mt-[-86px]">
        <MemberProfileCard />
        <MemberProfileContent />
      </div>
    </MemberDetailContext.Provider>
  );
}
