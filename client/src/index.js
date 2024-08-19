import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";

import "./styles/reset.css";
import "./styles/shadcn.css";
import App from "./App";
import store from "stores";
import ChannelService from "ChannelService";

ChannelService.loadScript();

const options = {
  pluginId: "01934fbe-4eab-4fab-a723-3254167cdcf0", // 채널톡 대시보드에서 제공받은 플러그인 ID
};

// 채널톡 초기화
ChannelService.boot(options, () => {
  console.log("ChannelTalk has been booted");
});

const reportWebVitals = () => {
  import("./reportWebVitals").then((module) => module.default());
};

export let persistor = persistStore(store);

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {process.env.NODE_ENV === "development" ? (
          <App />
        ) : (
          <StrictMode>
            <App />
          </StrictMode>
        )}
      </PersistGate>
    </Provider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
