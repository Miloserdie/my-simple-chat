import { getUsersReq } from "../../api/usersApi";

export const ACTION_SET_USERS = '[user] set users';

export function addUsersAction(users) {
	return {
		type: ACTION_SET_USERS,
		payload: users
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