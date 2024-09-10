import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

import { LoadingRender, NotFoundRender } from "@layouts/fallback";
import { axios, cn } from "@utils";
import { usePromise } from "@hooks";
import { ProfileDetailContext, ProfileFetchContext } from "@stores/context";

import MemberProfileCard from "./card/MemberProfileCard";
import MemberProfileContent from "./content/MemberProfileContent";

export default function MemberDetail() {
  const { id } = useParams();
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
    <LoadingRender />
  ) : error ? (
    <NotFoundRender message="회원 정보를 찾을 수 없습니다" />
  ) : (
    <ProfileDetailContext.Provider value={profile}>
      <ProfileFetchContext.Provider value={fetchProfile}>
        <div
          className={cn(
            "flex flex-col flex-1 w-full mt-[-86px] max-w-screen-2xl mx-auto",
            "lg:px-16 lg:pt-4 lg:flex-row-reverse",
          )}
        >
          <div
            className={cn(
              "w-full h-fit overflow-hidden",
              "lg:ml-4 lg:w-72 xl:w-80 2xl:w-96 lg:rounded-lg",
            )}
          >
            <MemberProfileCard />
          </div>
          <MemberProfileContent />
        </div>
      </ProfileFetchContext.Provider>
    </ProfileDetailContext.Provider>
  );
}
