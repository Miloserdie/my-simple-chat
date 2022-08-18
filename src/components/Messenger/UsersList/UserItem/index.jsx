import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getLastMessageReq } from "../../../../api/messages";
import { getMesssagesHistoryReqAction } from "../../../../store/actions/messages";
import { addUserAction } from "../../../../store/actions/user";

export default function UserItem({user}) {
	const messages = useSelector(state => state.messages)
	const [lastMessage, setLastMessage] = useState(null);
	const dispatch = useDispatch();

	function openChat() {
		dispatch(addUserAction(user));
	}

	useEffect(() => {
		async function lastMessage() {
			const lastMessage = await getLastMessageReq(user);

			setLastMessage(lastMessage[0]);
		}

		lastMessage()
	}, [user, messages])

	return (
		<li onClick={openChat} className="users__list-item">
			<img className="users__avatar" src={user.avatar} alt="" />
			<div className="users__info">
				<div className="users__info-left">
					<p className="users__nickname">{`${user.firstName} ${user.lastName}`}</p>
					<p className="users__time">{lastMessage?.date?.substring(12, 18)}</p>
					
				</div>
				<p className="users__last-msg">{lastMessage?.message}</p>
			</div>
		</li>
	)
}