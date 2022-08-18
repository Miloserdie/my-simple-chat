import { setLogin } from "../../api/loginApi";
import './style.scss';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function LoginPage() {
	const navigate = useNavigate();
	const currentUser = useAuth();
	

	async	function login() {
		const res = await setLogin();

		const user = {
			name: res.user.displayName,
			token: res.user.accessToken,
			photo: res.user.photoURL,
			id: res.user.uid
		}

		localStorage.setItem('user', JSON.stringify(user));

		navigate('/chat');
	}

	return currentUser?.token ? (
		<Navigate to='/chat' />
	) : (
		<section className="login">
			<div className="login__table">
				<h2 className="login__title">Welcome to Chat</h2>
				<button className="login__btn" onClick={login}>Login with Google</button>
			</div>
		</section>
	)
}