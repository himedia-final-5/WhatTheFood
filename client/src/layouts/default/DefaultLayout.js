import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";

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
