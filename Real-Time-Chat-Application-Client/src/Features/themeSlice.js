
// import { createSlice } from "@reduxjs/toolkit";

// export const themeSlice = createSlice({
//   name: "themeSlice",
//   initialState: true ,
//   reducers: {
//     toggleTheme: (state) => {
//       state = !state;
//     },
//   },
// });

// export const { toggleTheme } = themeSlice.actions;


// export default themeSlice.reducer;



// themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: { lightTheme: true },
  reducers: {
    toggleTheme: (state) => {
      state.lightTheme = !state.lightTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
