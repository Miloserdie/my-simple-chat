import { getUsersReq } from "../../api/usersApi";

export const ACTION_SET_USERS = '[users] set users';
export const ACTION_UPDATE_USER = '[users] update user'
export const ACTION_CHECKED_MESSAGE = '[users] user checked message'

export function addUsersAction(users) {
	return {
		type: ACTION_SET_USERS,
		payload: users
	}
}

export function updateUserAction(user, id, message) {
	return {
		type: ACTION_UPDATE_USER,
		payload: {user, id, message}
	}
}

export function userCheckMessageAction(user) {
	return {
		type: ACTION_CHECKED_MESSAGE,
		payload: user
	}
}

export const getUsersReqAction = () => async dispatch => {
	try {
		const users = await getUsersReq(); 

	  dispatch(addUsersAction(users));
	} catch (err) {
		console.warn(err);
	}
}