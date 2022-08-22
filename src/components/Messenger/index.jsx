import './style.scss';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsersReqAction } from "../../store/actions/users"
import UsersList from '../UsersList';
import { Outlet } from 'react-router-dom';

export default function Messenger() {
	const users = useSelector(state => state.users);
	const chatStatus = useSelector(state => state.chatStatus.status)
	const [searchValue, setSearchValue] = useState('');
	const dispatch = useDispatch();
	const currentUser = useAuth();
	const activeUserList = chatStatus ? 'inactive' : '';

	const filteredUsers = users?.filter(user => {
		return `${user.lastName} ${user.firstName}`.toLowerCase().includes(searchValue.toLowerCase());
	})

	useEffect(() => {
		dispatch(getUsersReqAction());
	}, [])

	return (
		<section className='messenger'>
			<div className={`messenger__left ${activeUserList}`} >
				<div className='messenger__left-top'>
					<div className='messenger__photo'>
						<img src={currentUser.photo} alt="" />
					</div>
				<input placeholder='Search' onChange={(e) => setSearchValue(e.target.value)} name='search' className='messenger__search' type="text" value={searchValue}/>
				</div>
				<div className='messenger__left-bottom'>
					<h3 className='messenger__title-chats'>Chats</h3>
					<div className='messenger__chats'>
						<UsersList users={filteredUsers} />
					</div>
				</div> 	
			</div>
			{chatStatus ? <Outlet /> : <div className='messenger__plug'><span>Select a chat to start conversation</span></div>}
		</section>
	)
}