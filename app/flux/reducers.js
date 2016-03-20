// third party
import {combineReducers} from "redux";
import * as ActionTypes from "./actionTypes";
import * as Constants from "../constants";

export function Backend(state, action) {
	if (state == null) {
		return {
			connected: true
		}
	}

	switch (action.type) {
		case ActionTypes.BACKEND_TV_FOUND:
			return Object.assign({}, state, {
				connected: true
			});
		case ActionTypes.BACKEND_PAIR_DISCONNECTED:
			return Object.assign({}, state, {
				connected: false
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

export function Chat(state, action) {
	if (state == null) {
		return {
			messages: []
		}
	}

	switch (action.type) {
		case ActionTypes.CHAT_ADD_MESSAGE:
			return Object.assign({}, state, {
				messages: [action.message, ...state.messages]
			});
		default:
			return state;
	}
}

export function CreateVote(state, action) {
	if (state == null) {
		return {
			question: '',
			answers: []
		}
	}

	switch (action.type) {
		case ActionTypes.CREATEVOTE_SET_QUESTION:
			return Object.assign({}, state, {
				question: action.question
			});
		case ActionTypes.CREATEVOTE_ADD_ANSWER:
			return Object.assign({}, state, {
				answers: [...state.answers, {index: state.answers.length, text: ''}]
			});
		case ActionTypes.CREATEVOTE_SAVE_VOTE:
			return Object.assign({}, state, {
				question: '',
				answers: []
			});
		case ActionTypes.CREATEVOTE_SET_ANSWER:
			let answers = _.cloneDeep(state.answers);
			answers[action.answer.index].text = action.answer.text;
			return Object.assign({}, state, {
				answers
			});
		default:
			return state;
	}
}

const combinedReducers = combineReducers({
	Views, Backend, CreateVote, Chat
});

export default combinedReducers;