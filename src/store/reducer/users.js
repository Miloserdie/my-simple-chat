import { ACTION_SET_USERS, ACTION_UPDATE_USER } from "../actions/users";

const initialState = [];

export default function usersReducer(state = initialState, {type, payload}) {
	switch(type) {
		case ACTION_SET_USERS:
			return payload;
		case ACTION_UPDATE_USER:
			return [...state.map((user) => {
				if(user.id === payload.id) {
					return {
						...user,
						lastMessageDate: payload.user.lastMessageDate,
						lastMessage:payload.user.lastMessage
					};
				}
				return user;
			})]
		default: return state;
	}	
}