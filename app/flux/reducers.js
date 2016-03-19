// third party
import {combineReducers} from "redux";
import * as ActionTypes from "./actionTypes";
var _ = require('lodash');
var moment = require('moment');

export function User(state, action) {
	if (state == null) {
		return {}
	}

	switch (action.type) {
		case ActionTypes.FOO:
			return Object.assign({}, state, {});
		default:
			return state;
	}
}

const combinedReducers = combineReducers({
	User
});

export default combinedReducers;