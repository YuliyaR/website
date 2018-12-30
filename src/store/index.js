import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import { reducer } from "./reducer";
import logger from "redux-logger";

// import amplitudeMiddleware from "./amplitude";

const middleware = applyMiddleware(thunkMiddleware, logger);
const store = createStore(reducer, middleware);

export default store;
