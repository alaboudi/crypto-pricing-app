import { combineEpics, createEpicMiddleware } from "redux-observable";

import bootstrapEpic from "./bootstrap";
import pricingEpic from "./pricing";
import toastEpic from "./toast";

export const rootEpic = combineEpics(bootstrapEpic, pricingEpic, toastEpic);

export const epicMiddleware = createEpicMiddleware();
