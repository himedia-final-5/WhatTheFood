import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function DefaultLayout() {
  return (
    <>
      <Header />

      <div aria-label="main-container" className="flex-1 max-w-full pt-4">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
