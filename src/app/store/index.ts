import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "./reducer";
import { epicMiddleware, rootEpic } from "./effects";

const store = configureStore({
    reducer: stateReducer,
    middleware: [epicMiddleware]
});

epicMiddleware.run(rootEpic);

export default store;
