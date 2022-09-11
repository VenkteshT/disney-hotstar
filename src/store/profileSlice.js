import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    showProfile: false,
  },
  reducers: {
    toggle(state) {
      state.showProfile = !state.showProfile;
    },
  },
});

export const profileActions = profileSlice.actions;
export default profileSlice;
