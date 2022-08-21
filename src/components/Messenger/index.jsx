import './style.scss';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsersReqAction } from "../../store/actions/users"
import UsersList from '../UsersList';
import Chat from '../Chat';

export default function Messenger() {
	const users = useSelector(state => state.users);
	const currentUser = useAuth();
	const [searchValue, setSearchValue] = useState('');
	const dispatch = useDispatch();

	function findUser(e) {
		setSearchValue(e.target.value)
	}

	useEffect(() => {
		dispatch(getUsersReqAction());
	}, [])

	return (
		<section className='messenger'>
			<div className='messenger__left'>
				<div className='messenger__left-top'>
					<div className='messenger__photo'>
						<img src={currentUser.photo} alt="" />
					</div>
				<input placeholder='Search' onChange={(e) => findUser(e)} name='search' className='messenger__search' type="text" value={searchValue}/>
				</div>
				<div className='messenger__left-bottom'>
					<h3 className='messenger__title-chats'>Chats</h3>
					<div className='messenger__chats'>
						<UsersList users={users} />
					</div>
				</div>
			</div>
			<Chat />
		</section>
	)
}