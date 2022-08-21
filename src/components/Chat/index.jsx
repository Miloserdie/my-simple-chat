import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect, useRef, useState } from "react";
import { getMesssagesHistoryReqAction, sendMessageReqAction } from "../../store/actions/user";
import './style.scss'

export default function Chat({activeChat, setActiveChat}) {
	const [messageValue, setMessageValue] = useState('');
	const user = useSelector(state => state.user);
	const messages = useSelector(state => state.user.messages)
	const dispatch = useDispatch();
	const chatScrollEnd = useRef(null);
	

	const scrollToBottom = () => {
		chatScrollEnd.current?.scrollIntoView({
		  	behavior: 'smooth',
			block: 'end',
			inline: 'nearest',
		});
	}

	messages?.sort((a, b) => {
		a = a.date;
		b = b.date;
		return a > b ? 1 : a < b ? -1 : 0;
	})

	function sendMessage(e) {
		e.preventDefault()

		if(!messageValue.trim()) {
			setMessageValue('');

			return
		}
		
		const message = {
			message: messageValue.trim(),
			status: 'send',
			date: new Date().toString().substring(3, 24),
			id: Math.random().toString(20).substring(2),
			userId: user.id
		}

		const updateUser = {
			...user,
			lastMessageDate: message.date,
			lastMessage: messageValue.trim(),
			messages: []
		}

		dispatch(sendMessageReqAction(message, updateUser));

		setMessageValue('');
	}

	useEffect(() => {
		dispatch(getMesssagesHistoryReqAction(user));
		
		setMessageValue('');
	}, [user.id]);


	useEffect(() => {
		scrollToBottom();
	}, [user.messages?.length])

	return !user.firstName ? (
		<div className={`messenger__right ${activeChat}`}>
			<div className="messenger__no-user">
				<div className="messenger__plug">Select a chat to start conversation</div>
			</div>
		</div>
	) : (
		<div className={`messenger__right ${activeChat}`}>
			<div className='messenger__head'>
				<div className="messenger__head-info">
					<img className='messenger__friend-avatar' src={user?.avatar} alt="" />
					<p className='messenger__friend-nick'>
						{`${user?.firstName} ${user?.lastName}`}
					</p>
				</div>
				<button onClick={() => setActiveChat('not-active')} className="messenger__head-back-btn">back</button>
			</div>
			<div className='messenger__chat' >
				<ul>
				{
					messages?.map(message => {
						return (
							<div className={`messenger__message ${message.status === 'send'? 'send-message' : 'received-message'}`} key={message.id + message?.date}>
								<div className="message-text">{message?.message}</div>
								<div className="message-date">{message?.date?.substring(0, 22)}</div>
							</div>
						)
					})
				}
				</ul>
				<span ref={chatScrollEnd}></span>
			</div>
			<div className='messenger__right-bottom'>
				<form onSubmit={sendMessage} className='messenger__message-form'>
						<input value={messageValue} onChange={(e) => setMessageValue(e.target.value)} placeholder='Type your message' className='messenger__input-message' type="text" />
						<button disabled={!messageValue} type='submit' className='messenger__send-btn'>
							<img alt='send-icon' src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/000000/external-send-user-interface-kmg-design-detailed-outline-kmg-design.png"/>
						</button>
				</form>
			</div>
		</div>
	)
}