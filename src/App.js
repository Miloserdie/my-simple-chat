import './App.css';
import LoginPage from './components/Login';
import { Routes, Route, Navigate } from 'react-router-dom'
import ChatManager from './components/ChatManager';

function App() {

  return (
		<Routes>
			<Route path='' element={<Navigate replace to='chat'/>}/>
			<Route path='/chat' element={<ChatManager />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='*' element={<div>404</div>} />
		</Routes>
  );
}

export default App;
