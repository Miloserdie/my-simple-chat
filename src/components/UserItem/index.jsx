import { useDispatch } from "react-redux/es/exports";
import { addUserAction } from "../../store/actions/user";

export default function UserItem({user, setActiveChat}) {
	const dispatch = useDispatch();

	function openChat() {
		dispatch(addUserAction(user));

		setActiveChat('active')
	}

	return (
		<li onClick={openChat} className="users__list-item">
			<img className="users__avatar" src={user.avatar} alt="" />
			<div className="users__info">
				<div className="users__info-left">
					<p className="users__nickname">{`${user.firstName} ${user.lastName}`}</p>
					<p className="users__time">{user.lastMessageDate.substring(12, 18)}</p>
				</div>
				<p className="users__last-msg">{user.lastMessage}</p>
			</div>
		</li>
	)
}