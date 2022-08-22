import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeChatStatusTrueAction } from "../../store/actions/chatStatus";

export default function UserItem({user}) {
	const dispatch = useDispatch()

	return (
		<Link onClick={() => dispatch(changeChatStatusTrueAction())} to={user.id} className="users__list-item">
			<img className="users__avatar" src={user.avatar} alt="" />
			{!user.isLastMessageChecked && 
				<span className="users__notification"></span>
			}
			<div className="users__info">
				<div className="users__info-left">
					<p className="users__nickname">{`${user.firstName} ${user.lastName}`}</p>
					<p className="users__time">{user.lastMessageDate.substring(12, 18)}</p>
				</div>
				<p className="users__last-msg">{user.lastMessage}</p>
			</div>
		</Link>
	)
}