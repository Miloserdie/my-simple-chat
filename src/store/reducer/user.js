import { ACTION_SET_USER } from "../actions/user";

const initialState = [];

export default function userReducer(state = initialState, {type, payload}) {
	switch(type) {
		case ACTION_SET_USER:
			return payload; 	
		default: return state;
	}	
}