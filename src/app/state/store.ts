import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "./reducer";

const store = configureStore({
    reducer: stateReducer
});

export default store;
