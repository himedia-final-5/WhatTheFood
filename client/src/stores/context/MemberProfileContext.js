import { createContext, useContext } from "react";

/** @type {React.Context<MemberProfileDetail>} */
const ProfileDetailContext = createContext();

const useProfileDetail = () => {
  const context = useContext(ProfileDetailContext);
  if (!context) {
    throw new Error(
      "useProfileDetail must be used within a ProfileDetailProvider",
    );
  }
  return context;
};

/** @type {React.Context<() => void>} */
const ProfileFetchContext = createContext();

const useProfileFetch = () => {
  const context = useContext(ProfileFetchContext);
  if (!context) {
    throw new Error(
      "useProfileFetch must be used within a ProfileFetchProvider",
    );
  }
  return context;
};

export {
  ProfileDetailContext,
  useProfileDetail,
  ProfileFetchContext,
  useProfileFetch,
};
