import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogInDetails(state, action) {
      const user = action.payload;
      state.name = user.name;
      state.email = user.email;
      state.photo = user.photo;
    },
    logOut(state) {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
