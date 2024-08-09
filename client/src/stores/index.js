import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import {
  useSelector as reduxUseSelector,
  useDispatch as reduxUseDispatch,
} from "react-redux";
import storage from "redux-persist/lib/storage";

// 하위 슬라이스를 불러옵니다.
import { userSlice } from "./userSlice";

// 리듀서를 합쳐주는 과정에서 redux-persist를 사용해 스토어에 저장할 리듀서를 지정합니다.
const reducer = persistReducer(
  {
    key: "root",
    storage,
  },
  combineReducers({
    user: userSlice.reducer,
  }),
);

// 스토어에 configureStore를 사용해 리듀서를 등록합니다.
// serializableCheck 옵션을 false로 설정해 액션의 직렬화를 비활성화합니다.
const store = configureStore({
  reducer,
  middleware: (config) => config({ serializableCheck: false }),
});

// useSelector, useDispatch의 타입 추론을 위해 타입을 명시하고 내보냅니다.
/**
 * @type {import("react-redux").TypedUseSelectorHook<ReturnType<typeof store.getState>>}
 */
export const useSelector = reduxUseSelector;

/**
 * @type {import("@reduxjs/toolkit").Dispatch<typeof userSlice.actions>} Dispatch
 */
export const useDispatch = reduxUseDispatch;

export * from "./userSlice";

export default store;
