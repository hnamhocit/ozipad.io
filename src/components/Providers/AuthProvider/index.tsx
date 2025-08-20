import {ReactNode, useEffect} from "react";

import {useUserStore} from "@/stores";
import LoadingScreen from "./LoadingScreen";
import AuthScreen from "./AuthScreen";
import {onAuthStateChanged} from "@firebase/auth";
import {auth, db} from "@/config/firebase";
import {doc, getDoc} from "firebase/firestore";
import {IUser} from "@/interfaces";

const AuthProvider = ({children}: {children: ReactNode}) => {
	const { isLoading, user, set } = useUserStore()

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async(user) => {
			try {
				set({isLoading: true})

				if (user) {
					const snapshot = await getDoc(doc(db, 'users', user.uid));
					if (snapshot.exists()) {
						set({user: snapshot.data() as IUser});
					}
				}
			} catch (e) {
				console.log('Get user from DB failed', e)
			} finally {
				set({isLoading: false})
			}
		})

		return () => unsubscribe()
	}, []);

	if (isLoading) return <LoadingScreen />

	if (!user) return <AuthScreen />

	return children
}

export default AuthProvider;