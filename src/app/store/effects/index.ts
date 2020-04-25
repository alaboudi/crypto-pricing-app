import { combineEpics, createEpicMiddleware } from "redux-observable";

import bootstrapEpic from "./bootstrap";

export const rootEpic = combineEpics(bootstrapEpic);

export const epicMiddleware = createEpicMiddleware();
