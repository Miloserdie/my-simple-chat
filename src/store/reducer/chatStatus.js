import { ACTION_SET_CHAT_STATUS_TRUE, ACTION_SET_CHAT_STATUS_FALSE } from "../actions/chatStatus";

const initialState = {
	status: false
}

export default function chatStatusReducer(state = initialState, {type}) {
	switch(type) {
		case ACTION_SET_CHAT_STATUS_FALSE:
			return {...state, status: false}
		case ACTION_SET_CHAT_STATUS_TRUE:
			if(!state.status) {
				return {...state, status: true}
			}
			return state
		default: return state;
	}
	
}