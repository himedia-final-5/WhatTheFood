import { lazyLoading as $ } from "utils";

export const InquiryList = $(() => import("./InquiryList"));
export const InquiryDetail = $(() => import("./InquiryView"));
export const InquiryWrite = $(() => import("./InquiryWriteForm"));
