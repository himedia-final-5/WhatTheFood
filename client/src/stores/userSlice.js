import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user", // userSlice 안에 저장되는 저장객체의 이름
  initialState: null,
  reducers: {
    loginAction: (state, action) => (state = action.payload),
    logoutAction: (state) => (state = null),
  },
});

export const { loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;
