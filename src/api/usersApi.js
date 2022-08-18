import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const USERS_URL = 'users';

export async function getUsersReq() {
	const docs = await getDocs(collection(db, USERS_URL));

	console.log({docs})

	return docs.docs.map((users) => {
		console.log({...users})
		return ({...users.data()});
		}
	)
}