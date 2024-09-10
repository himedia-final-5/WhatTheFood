import { lazyLoading as $ } from "@utils";

export const NoticeList = $(() => import("./Notice"));
export const NoticeDetail = $(() => import("./NoticeView"));
export const NoticeWrite = $(() => import("./WriteNotice"));
export const NoticeUpdate = $(() => import("./UpdateNotice"));
