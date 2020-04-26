import { combineEpics, createEpicMiddleware } from "redux-observable";

import bootstrapEpic from "./bootstrap";
import pricingEpic from "./pricing";

export const rootEpic = combineEpics(bootstrapEpic, pricingEpic);

export const epicMiddleware = createEpicMiddleware();
