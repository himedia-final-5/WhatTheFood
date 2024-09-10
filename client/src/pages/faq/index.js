import { lazyLoading as $ } from "@utils";

export const FaqList = $(() => import("./Faq"));
export const FaqDetail = $(() => import("./FaqView"));
export const FaqWrite = $(() => import("./FaqWriteForm"));
