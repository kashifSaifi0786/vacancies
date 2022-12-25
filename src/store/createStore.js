import { configureStore } from "@reduxjs/toolkit";
import reducer from "./vacancies";

const store = configureStore({
  reducer,
});

export default store;
