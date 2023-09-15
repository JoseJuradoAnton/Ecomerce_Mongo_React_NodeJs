import {configureStore} from "@reduxjs/toolkit";
import userSliceReduce from "./userSlice";
import productSliceReduce from "./productSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReduce,
    product: productSliceReduce,
  },
});
