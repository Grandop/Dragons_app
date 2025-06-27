import { combineReducers } from "@reduxjs/toolkit";
import { DragonService } from "../services/dragon";
import { AuthSlice } from "../slices/auth";

const reducer = combineReducers({
  // Services
  [DragonService.reducerPath]: DragonService.reducer,

  // Slices
  [AuthSlice.reducerPath]: AuthSlice.reducer
});

export { reducer };

export type RootState = ReturnType<typeof reducer>;
