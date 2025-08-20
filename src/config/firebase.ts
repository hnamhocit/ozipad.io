import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "@firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAf5U0v7eNSt8BEN5bR8DzklU6nm4vknF4",
	authDomain: "ozipad-f490a.firebaseapp.com",
	projectId: "ozipad-f490a",
	storageBucket: "ozipad-f490a.firebasestorage.app",
	messagingSenderId: "737665737476",
	appId: "1:737665737476:web:c68ed6c750697e8561e651"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export {db, auth}