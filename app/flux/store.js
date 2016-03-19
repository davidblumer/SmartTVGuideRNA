/**
 * Created by helion on 19/03/16.
 */

import {createStore, applyMiddleware} from "redux";
import combinedReducers from "./reducers";
import thunk from "redux-thunk";
import createLogger from "redux-logger";

const logger = createLogger({
	collapsed: true
});

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

export default createStoreWithMiddleware(combinedReducers);