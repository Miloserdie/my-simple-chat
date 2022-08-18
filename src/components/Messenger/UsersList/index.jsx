import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './style.scss';
import UserItem from "./UserItem";

export default function UsersList() {
	const users = useSelector(state => state.users);
	const messages = useSelector(state => state.messages);
	const [asdss, sssss] = useState(Math.random())

	useEffect(() => {
		sssss(Math.random());
	},[])

	users.sort((a, b) => {
		a = a.lastMessageDate;
		b = b.lastMessageDate;
		return a > b ? -1 : a < b ? 1 : 0;
	});

	return (
		<ul key={asdss} className="users">
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