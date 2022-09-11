import { createSlice, configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import profileSlice from "./profileSlice";
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    profile: profileSlice.reducer,
  },
});
export default store;
