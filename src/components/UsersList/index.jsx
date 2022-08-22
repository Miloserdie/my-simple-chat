import './style.scss';
import UserItem from "../UserItem";

export default function UsersList({users}) {

	users.sort((a, b) => {
		a = a.lastMessageDate;
		b = b.lastMessageDate;
		return a > b ? -1 : a < b ? 1 : 0;
	});

	return (
		<div className="users">
			{
				users?.map(user => {
					return (
						<UserItem key={user.id} user={user} />
					)
				})
			}
		</div>
	)
}