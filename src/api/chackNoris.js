const chackUrl = 'https://api.chucknorris.io/jokes/random';

export async function getChackNorisAnswerReq() {
	const res = await fetch(chackUrl);

	return res.json();
}