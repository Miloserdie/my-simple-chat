export const ACTION_SET_USER = '[user] set user';


export function addUserAction(user) {
	return {
		type: ACTION_SET_USER,
		payload: user
	}
}