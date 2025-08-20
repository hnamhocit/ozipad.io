import {doc, getDoc, setDoc} from "firebase/firestore";
import {User} from "@firebase/auth";
import {IUser} from "@/interfaces";
import {db} from "@/config/firebase";

export async function createUserIfNotExists(user: User, newUser: IUser) {
	const userRef = doc(db, "users", user.uid);
	const snap = await getDoc(userRef);

	if (!snap.exists()) {
		await setDoc(userRef, newUser);
	}
}
