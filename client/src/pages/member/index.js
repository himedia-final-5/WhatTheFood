import { lazyLoading as $ } from "utils";

export const MemberJoin = $(() => import("./JoinForm"));
export const MemberLogin = $(() => import("./Login"));
export const MemberUpdate = $(() => import("./UpdateForm"));
