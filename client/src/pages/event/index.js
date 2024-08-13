import { lazyLoading as $ } from "utils";

export const EventList = $(() => import("./EventList"));
export const EventDetail = $(() => import("./EventDetail"));
export const EventWrite = $(() => import("./EventCreate"));
export const EventUpdate = $(() => import("./UpdateEvent"));
