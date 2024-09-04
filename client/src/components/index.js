import { lazyLoading as $ } from "utils";

export const AuthSignInForm = $(() => import("./features/auth/AuthSignInForm"));
export const AuthSignUpForm = $(() => import("./features/auth/AuthSignUpForm"));

export const MemberRankItem = $(
  () => import("./features/member/MemberRankItem"),
);

export const RecipeFavoriteButton = $(
  () => import("./features/recipe/RecipeFavoriteButton"),
);
