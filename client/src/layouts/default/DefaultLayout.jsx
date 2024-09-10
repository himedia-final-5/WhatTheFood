import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import ChannelService from "@utils/ChannelService";

ChannelService.loadScript();

const options = {
  pluginId: "01934fbe-4eab-4fab-a723-3254167cdcf0", // 채널톡 대시보드에서 제공받은 플러그인 ID
};

// 채널톡 초기화
ChannelService.boot(options, () => {});

export default function DefaultLayout() {
  return (
    <>
      <Header />

      <div aria-label="main-container" className="flex flex-1 max-w-full pt-4">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
