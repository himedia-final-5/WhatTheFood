import { lazyLoading as $ } from "utils";

export const ErrorRender = $(() => import("./ErrorRender"));
export const LoadingRender = $(() => import("./LoadingRender"));
export const NoContentRender = $(() => import("./NoContentRender"));
export const NotFoundRender = $(() => import("./NotFoundRender"));
