import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";

import "@styles/reset.css";
import "@styles/shadcn.css";
import App from "./App";
import store from "@stores";

const reportWebVitals = () => {
  import("./reportWebVitals").then((module) => module.default());
};

export let persistor = persistStore(store);

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StrictMode>
          <App />
        </StrictMode>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
);

// Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
