import { lazyLoading as $ } from "utils";

export const EmailLogin = $(() => import("./callback/EmailLogin"));
export const OAuth2Login = $(() => import("./callback/OAuth2Login"));
export const MemberDetail = $(() => import("./MemberDetail/MemberDetail"));
