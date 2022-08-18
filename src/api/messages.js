import { collection, getDocs, updateDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function getLastMessageReq(user) {
	const docs = await getDocs(collection(db, `users/${user.id}/lastMessage`));

	return docs.docs.map((message) => {
		return ({...message.data()});
		}
	)
}

export async function getMessageHistoryReq(user) {
	const docs = await getDocs(collection(db, `users/${user.id}/message-history`));

	return docs.docs.map((message) => {
		return ({...message.data()});
		}
	)
}

export async function sendMessageReq(message, user) {
	await updateDoc(doc(db, `users/${user.id}/lastMessage`, 'message'), message);

	await setDoc(doc(db, `users/${user.id}/message-history`, message.id), message);
}