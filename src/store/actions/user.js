import { getChackNorisAnswerReq } from "../../api/chackNoris";
import { getMessageHistoryReq, sendMessageReq } from "../../api/messages";
import { updateUserReq } from "../../api/usersApi";
import { updateUserAction } from "./users";
import { generateRandomInteger } from "../../utils/generateRandomInteger";

export const ACTION_SET_USER = '[user] set user';
export const ACTION_SET_MESAGGES = '[user] set messages'
export const ACTION_ADD_MESAGGE = '[user] add message'


export function addUserAction(user, messages) {
	return {
		type: ACTION_SET_USER,
		payload: {user, messages}
	}
}

export function getMessagesAction(messages) {
	return {
		type: ACTION_SET_MESAGGES,
		payload: messages
	}
}

export function addMessageAction(message, updatedUser) {
	return {
		type: ACTION_ADD_MESAGGE,
		payload: {message, updatedUser}
	}
}

export const addUserReqAction = (user) => async dispatch => {
	const messages = await getMessageHistoryReq(user);

	dispatch(addUserAction(user, messages))
}

export const getMesssagesHistoryReqAction = (user) => async dispatch => {
	try {
		const messages = await getMessageHistoryReq(user);

		dispatch(getMessagesAction(messages));
	} catch (err) {
		console.warn(err)
	}
}

export const sendMessageReqAction = (message, updatedUser) => async dispatch => {
	try {
		await sendMessageReq(message, updatedUser.id);

		await updateUserReq(updatedUser);

	 	dispatch(addMessageAction(message, updatedUser));

		dispatch(updateUserAction(updatedUser, updatedUser.id));

		function doSetTimeout(x) {

			setTimeout(() => {
				dispatch(sendAnswerMessageReqAction(x))
			}, generateRandomInteger(10000, 14000));
		}

		doSetTimeout(updatedUser);

	} catch (err) {
		console.warn(err);
	}
}

export const sendAnswerMessageReqAction = (user) => async dispatch => {
	try {
		const chackAnswer = await getChackNorisAnswerReq();

		console.log('123', user)

		const answerMessage = {
			message: chackAnswer.value,
			status: 'reseived',
			date: new Date().toString().substring(3, 24),
			id: Math.random().toString(20).substring(2),
			userId: user.id
		}

		const updatedUser = {
			...user,
			lastMessageDate: answerMessage.date,
			lastMessage: answerMessage.message,
			messages: []
		}

		await updateUserReq(updatedUser);
		
		await sendMessageReq(answerMessage, updatedUser.id);

		dispatch(addMessageAction(answerMessage, user.id));

		dispatch(updateUserAction(updatedUser, updatedUser.id));
	} catch (err) {
		console.warn(err);
	}
}