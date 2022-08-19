import { ACTION_SET_USERS, ACTION_UPDATE_USER } from "../actions/users";

const initialState = [];

export default function usersReducer(state = initialState, {type, payload}) {
	switch(type) {
		case ACTION_SET_USERS:
			return payload;
		case ACTION_UPDATE_USER:
			return [...state.map((user) => {
				if(user.id === payload.id) {
					console.log('1111111', payload.user)
					return payload.user;
				}
				console.log('222222222', payload.user)
				return user;
			})]
		default: return state;
	}	
}