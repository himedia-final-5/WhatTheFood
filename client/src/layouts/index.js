import { lazyLoading as $ } from "@utils";

export const DefaultLayout = $(() => import("./default/DefaultLayout"));
export const EmptyLayout = $(() => import("./empty/EmptyLayout"));
export const AdminLayout = $(() => import("./admin/AdminLayout"));
