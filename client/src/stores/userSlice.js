import { createSlice } from "@reduxjs/toolkit";

/**
 * user 슬라이스를 생성하는 함수입니다.
 * 리덕스의 슬라이스는 상태와 액션을 하나로 묶어서 관리하는 단위입니다.
 * 슬라이스의 이름, 초기 상태, 리듀서 함수 목록을 인자로 받아서 슬라이스를 생성합니다
 * createSlice 함수는 슬라이스의 이름을 기반으로 액션 타입을 자동으로 생성합니다.
 *
 * @type {import("@reduxjs/toolkit").Slice<User | null, import("@reduxjs/toolkit").SliceCaseReducers<User | null>, "user">}
 */
export const userSlice = createSlice({
  name: "user", // 슬라이스의 이름
  initialState: null, // 슬라이스의 초기 상태
  reducers: {
    // 리듀서 함수 목록
    // 리듀서 함수의 역할은 현재 상태와 액션을 받아서 새로운 상태를 반환하는 것입니다.

    /**
     * 사용자를 로그인하는 액션 리듀서입니다.
     *
     * @param {User | null} state - 현재 슬라이스의 상태입니다.
     * @param {import("@reduxjs/toolkit").PayloadAction<User>} action - 사용자 정보를 담고 있는 액션입니다.
     *
     * @returns {User} 입력된 사용자 정보를 반환해 사용자 정보가 있는 상태로 변경합니다.
     */
    signinAction: (state, action) => action.payload,

    /**
     * 사용자를 로그아웃하는 액션입니다.
     *
     * @returns {null} null을 반환해 사용자 정보가 없는 상태로 변경합니다.
     */
    signoutAction: () => null,

    /**
     * 사용자 프로필을 수정하는 액션입니다.
     *
     * @param {User | null} state - 현재 슬라이스의 상태입니다.
     * @param {import("@reduxjs/toolkit").PayloadAction<object>} action - 사용자 프로필 정보를 담고 있는 액션입니다.
     */
    updateProfile: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { signinAction, signoutAction, updateProfile } = userSlice.actions;

export default userSlice.reducer;
