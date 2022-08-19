import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const USERS_URL = 'users';

export async function getUsersReq() {
	const docs = await getDocs(collection(db, USERS_URL));

	return docs.docs.map((users) => {
		return ({...users.data()});
		}
	)
}

export async function updateUserReq(user, id) {
	await updateDoc(doc(db, USERS_URL, id), user);
}