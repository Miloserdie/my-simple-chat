import { getChackNorisAnswerReq } from "../../api/chackNoris";
import { getMessageHistoryReq, sendMessageReq } from "../../api/messages";
import { getUsersReq, updateUserReq } from "../../api/usersApi";
import { updateUserAction, userCheckMessageAction } from "./users";
import { generateRandomInteger } from "../../utils/generateRandomInteger";

export const ACTION_SET_USER = '[user] set user';
export const ACTION_SET_MESAGGES = '[user] set messages'
export const ACTION_ADD_MESAGGE = '[user] add message'


export function addUserAction(user) {
	return {
		type: ACTION_SET_USER,
		payload: user 
	}
}

export function getMessagesAction(messages) {
	return {
		type: ACTION_SET_MESAGGES,
		payload: messages
	}
}

export function addMessageAction(message) {
	return {
		type: ACTION_ADD_MESAGGE,
		payload: {message}
	}
}

export const addUserReqAction = (id) => async dispatch => {
	try {
		const users = await getUsersReq();

		const user = users.filter((user) => {
			return user.id === id;
		})

		dispatch(addUserAction(...user))
	} catch (err) {
		console.warn(err)
	}
}

export const updateUserCheckedReqACtion = (user) => async dispatch => {
	
	const userChecked = {
		...user,
		isLastMessageChecked: true
	}

	try {
		await updateUserReq(userChecked);

		dispatch(userCheckMessageAction(userChecked));
	} catch (err) {
		console.warn(err)
	}
}

export const getMesssagesHistoryReqAction = (id) => async dispatch => {
	try {
		const messages = await getMessageHistoryReq(id);

		dispatch(getMessagesAction(messages));
	} catch (err) {
		console.warn(err)
	}
}

export const sendMessageReqAction = (message, updatedUser) => async dispatch => {
	try {
		await sendMessageReq(message, updatedUser.id);

		await updateUserReq(updatedUser);

	 	dispatch(addMessageAction(message));

		dispatch(updateUserAction(updatedUser, updatedUser.id));

		setTimeout(() => {
			dispatch(sendAnswerMessageReqAction(updatedUser))
		}, generateRandomInteger(10000, 14000));

	} catch (err) {
		console.warn(err);
	}
}

export const sendAnswerMessageReqAction = (user) => async dispatch => {
	try {
		const chackAnswer = await getChackNorisAnswerReq();

		const answerMessage = {
			message: chackAnswer.value,
			status: 'received',
			date: new Date().toString().substring(3, 24),
			id: Math.random().toString(20).substring(2),
			userId: user.id
		}

		const updatedUser = {
			...user,
			lastMessageDate: answerMessage.date,
			lastMessage: answerMessage.message,
			isLastMessageChecked: false,
			messages: []
		}

		await updateUserReq(updatedUser);
		
		await sendMessageReq(answerMessage, updatedUser.id);

		dispatch(addMessageAction(answerMessage, user.id));

		dispatch(updateUserAction(updatedUser, updatedUser.id, answerMessage));
	} catch (err) {
		console.warn(err);
	}
}