export const ACTION_SET_CHAT_STATUS_TRUE = '[chat] set status true'
export const ACTION_SET_CHAT_STATUS_FALSE = '[chat] set status false'

export function changeChatStatusFalseAction() {
	return {
		type: ACTION_SET_CHAT_STATUS_FALSE
	}
}

export function changeChatStatusTrueAction() {
	return {
		type: ACTION_SET_CHAT_STATUS_TRUE
	}
}	
