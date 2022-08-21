import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function getMessageHistoryReq(user) {
	const docs = await getDocs(collection(db, `users/${user.id}/message-history`));

	return docs.docs.map((message) => {
		return ({...message.data()});
		}
	)
}

export async function sendMessageReq(message, id) {
	await setDoc(doc(db, `users/${id}/message-history`, message.id), message);
}