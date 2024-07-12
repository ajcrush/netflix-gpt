import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "conig",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});
export default configSlice.reducer;
export const { changeLanguage } = configSlice.actions;
