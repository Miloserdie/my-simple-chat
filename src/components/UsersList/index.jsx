import {  useSelector } from "react-redux";
import './style.scss';
import UserItem from "../UserItem";

export default function UsersList() {
	const users = useSelector(state => state.users);

	users.sort((a, b) => {
		a = a.lastMessageDate;
		b = b.lastMessageDate;
		return a > b ? -1 : a < b ? 1 : 0;
	});

	return (
		<ul className="users">
			{
				users?.map(user => {
					return (
						<UserItem key={user.id} user={user} />
					)
				})
			}
		</ul>
	)
}