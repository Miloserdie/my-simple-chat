import { useDispatch, useSelector } from "react-redux/es/exports";
import { sendMessageReqAction } from "../../store/actions/messages";
import { useEffect, useState } from "react";
import { updateUserReq } from "../../api/usersApi";
import { getMesssagesHistoryReqAction } from "../../store/actions/messages";

export default function Chat() {
	const [messageValue, setMessageValue] = useState('');
	const user = useSelector(state => state.user);
	const messages = useSelector(state => state.messages);
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getMesssagesHistoryReqAction(user));
	}, [messages])

	function sendMessage(e) {
		e.preventDefault()
		
		const message = {
			message: messageValue.trim(),
			status: 'send',
			date: new Date().toString().substring(3, 24),
			id: Math.random().toString(20).substring(2),
		}

		const updateUSer = {
			id: user.id,
			lastMessageDate: message.date
		}

		dispatch(sendMessageReqAction(message, user));
		updateUserReq(updateUSer);
		
		setMessageValue('');
	}

	return !user.firstName ? (
		<div className="messenger__no-user">
			<div className="messenger__plug">Select a chat to start conversation</div>
		</div>
	) : (
		<div className='messenger__right'>
			<div className='messenger__head'>
				<img className='messenger__friend-avatar' src={user?.avatar} alt="" />
				<p className='messenger__friend-nick'>
					{`${user?.firstName} ${user?.lastName}`}
				</p>
			</div>
			<div className='messenger__chat'>
				{
					messages?.map(message => {
						return (
							<div key={message.id}>
								<p>{message.id}</p>
								<div>{message?.message}</div>
								<div>{message?.date?.substring(12, 18)}</div>
							</div>
						)
					})
				}
			</div>
			<div className='messenger__right-bottom'>
				<form onSubmit={sendMessage} className='messenger__message-form'>
						<input value={messageValue} onChange={(e) => setMessageValue(e.target.value)} placeholder='Type your message' className='messenger__input-message' type="text" />
						<button type='submit' className='messenger__send-btn'>
							<img alt='send-icon' src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/000000/external-send-user-interface-kmg-design-detailed-outline-kmg-design.png"/>
						</button>
				</form>
			</div>
		</div>
	)
}