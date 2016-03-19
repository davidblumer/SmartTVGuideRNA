// third party
import {combineReducers} from "redux";
import * as ActionTypes from "./actionTypes";
import * as Constants from "../constants";

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
	Views
});

export default combinedReducers;