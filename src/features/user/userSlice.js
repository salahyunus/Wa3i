import { createSlice } from "@reduxjs/toolkit";
// start with blank strings
const initialState = { name: "", email: "", photo: "" };
// create a slice called user to use in redux storejs
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // 1st reducer function takes current state and action and updates state
    // updates state to the value it got by payloading it from the action
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    // 2nd reducer func. takes only current state
    // and sets the three properties to null
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
// use these vars to easily fetch/call pieces of data (name, email, photo)
export default userSlice.reducer;
