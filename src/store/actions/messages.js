import { getMessageHistoryReq, sendMessageReq } from "../../api/messages";

export const ACTION_SEND_MESSAGE = '[user] send message';
export const ACTION_GET_MESSAGES = '[user] get messages';

export function sendMessageAction(message) {
	return {
		type: ACTION_SEND_MESSAGE,
		payload: message
	}
}

export function getMessagesAction(messages) {
	return {
		type: ACTION_GET_MESSAGES,
		payload: messages
	}
}

export const sendMessageReqAction = (message, user) => async dispatch => {
	try {
		await sendMessageReq(message, user); 

	  dispatch(sendMessageAction(message));
	} catch (err) {
		console.warn(err);
	}
}

export const getMesssagesHistoryReqAction = (user) => async dispatch => {
	try {
		const messages = await getMessageHistoryReq(user);

		dispatch(getMessagesAction(messages));
	} catch (err) {
		console.warn(err)
	}
}