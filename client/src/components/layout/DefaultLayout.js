import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default function DefaultLayout() {
  return (
    <>
      <Header />

      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
