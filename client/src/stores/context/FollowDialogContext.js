import { createContext, useContext } from "react";

/** @type {React.Context<{followDialogMode: boolean}>} */
const FollowDialogValueContext = createContext();

const useFollowDialogValue = () => {
  const context = useContext(FollowDialogValueContext);
  if (!context) {
    throw new Error(
      "useFollowDialogValue must be used within a FollowDialogValueProvider",
    );
  }
  return context;
};

/** @type {React.Context<{setFollowDialogMode: React.Dispatch<React.SetStateAction<boolean>}>} */
const FollowDialogActionContext = createContext();

const useFollowDialogAction = () => {
  const context = useContext(FollowDialogActionContext);
  if (!context) {
    throw new Error(
      "useFollowDialogAction must be used within a FollowDialogActionProvider",
    );
  }
  return context;
};

export {
  FollowDialogValueContext,
  useFollowDialogValue,
  FollowDialogActionContext,
  useFollowDialogAction,
};
