import './style.scss';
import UserItem from "../UserItem";

export default function UsersList({users, setActiveChat}) {

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
						<UserItem setActiveChat={setActiveChat} key={user.id} user={user} />
					)
				})
			}
		</ul>
	)
}