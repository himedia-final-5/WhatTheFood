import { createSlice } from "@reduxjs/toolkit";
// slice 를 만들어 store 에 담고 reducer(action) 로 store(slice)의 상태를 업데이트 합니다
// 하나의 슬라이스에 여러 자료를 객체형식으로 담고, reducer로 값을 관리합니다
// reducer안에는 여러가지 동작의 함수들이 담겨서 사용될 수 있습니다
const initialState = {
  id: 0,
  username: "",
  nickname: "",
  role: "",
};

export const userSlice = createSlice({
  name: "user", // userSlice 안에 저장되는 저장객체의 이름
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.nickname = action.payload.nickname;
      state.role = action.payload.role;
    },
    logoutAction: (state) => {
      state.id = initialState.id;
      state.username = initialState.username;
      state.nickname = initialState.nickname;
      state.role = initialState.role;
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;
