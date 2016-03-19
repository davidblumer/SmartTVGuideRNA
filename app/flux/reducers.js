// third party
import {combineReducers} from "redux";
import * as ActionTypes from "./actionTypes";
import * as Constants from "../constants";

export function Backend(state, action) {
	if (state == null) {
		return {
		}
	}

	switch (action.type) {
		case ActionTypes.FOO:
			return Object.assign({}, state, {
			});
		default:
			return state;
	}
}

export function Views(state, action) {
	if (state == null) {
		return {
			tab: Constants.LIST
		}
	}

	switch (action.type) {
		case ActionTypes.VIEWS_SELECT_TAB:
			return Object.assign({}, state, {
				tab: action.tab
			});
		default:
			return state;
	}
}

const combinedReducers = combineReducers({
	Views, Backend
});

export default combinedReducers;