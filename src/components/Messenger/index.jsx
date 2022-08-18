import './style.scss';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getUsersReqAction } from "../../store/actions/users"
import UsersList from './UsersList';

export default function Messenger() {
	const currentUser = useAuth();
	const [searchValue, setSearchValue] = useState();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsersReqAction());
	}, [dispatch])

	return (
		<section className='messenger'>
			<div className='messenger__left'>
				<div className='messenger__left-top'>
					<div className='messenger__photo'>
						<img src={currentUser.photo} alt="" />
					</div>
				<input placeholder='Search' onChange={(e) => setSearchValue(e.target.value)} name='search' className='messenger__search' type="text" value={searchValue}/>
				</div>
				<div className='messenger__left-bottom'>
					<h3 className='messenger__title-chats'>Chats</h3>
					<div className='messenger__chats'>
						<UsersList />
					</div>
				</div>
			</div>
			<div className='messenger__right'>
				<div className='messenger__head'>
					<img className='messenger__friend-avatar' src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-send-envelopes-and-mail-soft-fill-soft-fill-juicy-fish.png" alt="" />
					<p className='messenger__friend-nick'>123</p>
				</div>
				<div className='messenger__chat'>
					
				</div>
				<div className='messenger__right-bottom'>
					<form className='messenger__message-form'>
							<input placeholder='Type your message' className='messenger__input-message' type="text" />
							<button className='messenger__send-btn'>
								<img alt='send-icon' src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/000000/external-send-user-interface-kmg-design-detailed-outline-kmg-design.png"/>
							</button>
					</form>
				</div>
			</div>
		</section>
	)
}