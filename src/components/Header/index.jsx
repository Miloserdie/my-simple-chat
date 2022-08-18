import { useAuth } from '../../hooks/useAuth';
import './style.scss'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function Header() {
	const navigate = useNavigate();
	const currentUser = useAuth();
	const auth = getAuth();

	function logOut () {
		signOut(auth);

		localStorage.clear();

		navigate('/');
	}

	return (
		<header className='header'>
			<p className='header__user-name'>Welcome, <span>{currentUser?.name}</span></p>
			<button onClick={logOut} className='header__log-out'>Sign out</button>
		</header>
	)
}