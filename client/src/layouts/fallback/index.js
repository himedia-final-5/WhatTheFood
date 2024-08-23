import { lazyLoading as $ } from "utils";

export const ErrorRender = $(() => import("./ErrorRender"));
export const NotFoundRender = $(() => import("./NotFoundRender"));
