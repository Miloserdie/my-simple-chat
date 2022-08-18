export const ACTION_SET_USER = '[user] set user';

export function addUserAction(user) {
	return {
		type: ACTION_SET_USER,
		payload: user
	}
}

export const updateUserReqAction = (user) => async dispatch => {
	try {
		// await updateUserReq(user); 

	} catch (err) {
		console.warn(err);
	}
 }