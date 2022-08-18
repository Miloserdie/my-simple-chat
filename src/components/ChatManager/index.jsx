import './style.scss';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Header from '../Header';
import Messenger from '../Messenger';

export default function ChatManager() {
	const currentUser = useAuth();
	
	return currentUser?.token ? (
		<div className='chat-manager'>
			<Header />
			<Messenger />
		</div>
	) : (
		<Navigate to='/login'/>
	)
}