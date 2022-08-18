export function useAuth() {
	return JSON.parse(localStorage.getItem('user'));

}