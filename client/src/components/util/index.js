import { lazyLoading as $ } from "@utils";

export const AdminFeature = $(() => import("./AdminFeature"));
export const AdminFeatureContainer = $(() => import("./AdminFeatureContainer"));
export const UserFeature = $(() => import("./UserFeature"));
export const UserFeatureContainer = $(() => import("./UserFeatureContainer"));

export const ImageUploadInput = $(() => import("./ImageUploadInput"));
export const PaginationNav = $(() => import("./PaginationNav"));
export const Modal = $(() => import("./Modal"));
