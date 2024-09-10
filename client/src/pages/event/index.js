import { lazyLoading as $ } from "@utils";

export const EventList = $(() => import("./EventList"));
export const EventDetail = $(() => import("./EventDetail"));
export const EventWrite = $(() => import("./EventWrite"));
export const EventUpdate = $(() => import("./EventUpdate"));
