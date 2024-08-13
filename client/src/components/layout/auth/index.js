import { lazyLoading as $ } from "utils";

export const AuthModal = $(() => import("./AuthModal"));
export const AuthSignInForm = $(() => import("./AuthSignInForm"));
export const AuthSignUpForm = $(() => import("./AuthSignUpForm"));
