import { lazyLoading as $ } from "utils";

export const AuthModal = $(() => import("./AuthModal"));
export const AuthSignInForm = $(() => import("./signin/AuthSignInForm"));
export const AuthSignUpForm = $(() => import("./signup/AuthSignUpForm"));
