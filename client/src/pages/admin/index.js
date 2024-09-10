import { lazyLoading as $ } from "@utils";

// admin main
export const AdminMain = $(() => import("./Login"));

// brand
export const AdminBrandList = $(() => import("./brand/BrandList"));

// event
export const AdminEventList = $(() => import("./event/EventList"));
export const AdminEventView = $(() => import("./event/EventView"));
export const AdminEventWrite = $(() => import("./event/WEvent"));
export const AdminEventUpdate = $(() => import("./event/EUpdate"));

// faq
export const AdminFaqList = $(() => import("./faq/FaqList"));
export const AdminFaqView = $(() => import("./faq/FaqView"));
export const AdminFaqWrite = $(() => import("./faq/WriteFaq"));
export const AdminFaqUpdate = $(() => import("./faq/FaqUpdate"));

// inquiry
export const AdminInquiryList = $(() => import("./inquiry/InquiryList"));
export const AdminInquiryView = $(() => import("./inquiry/InquiryView"));
export const AdminInquirySearchList = $(() => import("./inquiry/SearchIList"));

// member
export const AdminMemberList = $(() => import("./member/MemberList"));
export const AdminMemberView = $(() => import("./member/MView"));
export const AdminMemberSearchList = $(() => import("./member/SearchMList"));

// notice
export const AdminNoticeList = $(() => import("./notice/NoticeList"));
export const AdminNoticeView = $(() => import("./notice/NView"));
export const AdminNoticeWrite = $(() => import("./notice/NoticeWriteForm"));
export const AdminNoticeUpdate = $(() => import("./notice/NUpdate"));

// recipe
export const AdminRecipeList = $(() => import("./recipe/RecipeList"));
export const AdminRecipeView = $(() => import("./recipe/RecipeView"));
export const AdminRecipeSearchList = $(() => import("./recipe/SearchRList"));
