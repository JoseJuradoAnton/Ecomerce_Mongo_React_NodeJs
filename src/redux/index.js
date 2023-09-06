import { configureStore } from "@reduxjs/toolkit";
import userSliceReduce from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReduce,
  },
});
