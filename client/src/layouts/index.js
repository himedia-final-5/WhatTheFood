import { lazyLoading as $ } from "utils";

export const DefaultLayout = $(() => import("./default/DefaultLayout"));
export const AdminLayout = $(() => import("./admin/AdminLayout"));
