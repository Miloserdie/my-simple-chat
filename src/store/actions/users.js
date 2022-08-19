import { getUsersReq, updateUserReq } from "../../api/usersApi";

export const ACTION_SET_USERS = '[users] set users';
export const ACTION_UPDATE_USER = '[users] update user'

export function addUsersAction(users) {
	return {
		type: ACTION_SET_USERS,
		payload: users
	}
}

export function updateUserAction(user, id) {
	return {
		type: ACTION_UPDATE_USER,
		payload: {user, id}
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

export const updateUserReqAction = (updateUserForStore, user, id) => async dispatch => {
	try {
		await updateUserReq(user, id);

		dispatch(updateUserAction(updateUserForStore, id));
	} catch (err) {
		console.warn(err);
	}
}