import { ACTION_SEND_MESSAGE, ACTION_GET_MESSAGES } from "../actions/messages";

const initialState = [];

export default function messagesReducer(state = initialState, {type, payload}) {
	switch(type) {
		case ACTION_SEND_MESSAGE:
			return [...state, payload];
		case ACTION_GET_MESSAGES:
			return payload;
		default: return state;
	}	
}