import { Outlet } from "react-router-dom";

export default function EmptyLayout() {
  return (
    <div aria-label="main-container" className="flex w-full">
      <Outlet />
    </div>
  );
}
