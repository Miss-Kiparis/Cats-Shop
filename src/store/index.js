import { configureStore } from "@reduxjs/toolkit"; // toolkit redux
import { rootReducer } from "./reducers";

export default configureStore({
  reducer: rootReducer,
});
