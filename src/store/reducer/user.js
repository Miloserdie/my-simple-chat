import { ACTION_SET_USER, ACTION_SET_MESAGGES, ACTION_ADD_MESAGGE } from "../actions/user";

const initialState = {};

export default function userReducer(state = initialState, {type, payload}) {
	switch(type) {
		case ACTION_SET_USER:
			return {
				...payload.user,
				messages: payload.messages
			}
		case ACTION_SET_MESAGGES:
			return {
				...state,
				messages: payload
			}
		case ACTION_ADD_MESAGGE:
			if(state.id === payload.message.userId) {
				return {
					...state,
					lastMessageDate: payload.updatedUser.lastMessageDate,
					lastMessage: payload.updatedUser.lastMessage,
					messages: [...state.messages, payload.message]
				}	
			}
			break;
		default: return state;
	}	
}