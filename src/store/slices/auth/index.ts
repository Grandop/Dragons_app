import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  accessToken: string;
  username: string;
}

const initialState: AuthState = {
  accessToken: "",
  username: ""
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: AuthState, action: PayloadAction<AuthState>) => {
      state.accessToken = action.payload.accessToken;
    },
    logout: (state: AuthState) => {
      state.accessToken = "";
    }
  }
});

export const AuthReducer = AuthSlice.reducer;
export const AuthActions = AuthSlice.actions;
