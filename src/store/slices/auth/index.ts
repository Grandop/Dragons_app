import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  accessToken: string;
}

const initialState: AuthState = {
  accessToken: ""
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: AuthState, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    logout: (state: AuthState) => {
      state.accessToken = "";
    }
  }
});

export const AuthReducer = AuthSlice.reducer;
export const AuthActions = AuthSlice.actions;
