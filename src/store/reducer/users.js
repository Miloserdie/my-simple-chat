import { ACTION_SET_USERS } from "../actions/users";

const initialState = [];

export default function usersReducer(state = initialState, {type, payload}) {
	switch(type) {
		case ACTION_SET_USERS:
			return payload; 	
		default: return state;
	}	
}