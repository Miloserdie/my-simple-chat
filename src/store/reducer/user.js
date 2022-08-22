import { ACTION_SET_USER, ACTION_SET_MESAGGES, ACTION_ADD_MESAGGE } from "../actions/user";

const initialState = {};

export default function userReducer(state = initialState, {type, payload}) {
	switch(type) {
		case ACTION_SET_USER:
			if(state?.id !== payload?.id) {
				return payload
			}
			return state;
		case ACTION_SET_MESAGGES:
			return {
				...state,
				messages: payload
			}
		case ACTION_ADD_MESAGGE:
			if(state.id === payload.message.userId) {
				return {
					...state,
					lastMessageDate: payload.message.date,
					lastMessage: payload.message.message,
					isLastMessageChecked: true,
					messages: [...state.messages, payload.message]
				}	
			}
			return state;
		default: return state;
	}	
}