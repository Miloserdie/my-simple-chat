import { useSelector } from "react-redux"
import './style.scss';

export default function UsersList() {
	const users = useSelector(state => state.users);

	return (
		<ul className="users">
			{
				users?.map(user => {
					return (
						<li className="users__list-item" key={user.id}>
							<img className="users__avatar" src={user.avatar} alt="" />
							<div className="users__info">
								<div className="users__info-left">
									<p className="users__nickname">{`${user.firstName} ${user.lastName}`}</p>
									<p className="users__time">1231231</p>
									
								</div>
								<p className="users__last-msg">12a sdas das da sd asd</p>
							</div>
						</li>
					)
				})
			}
		</ul>
	)
}