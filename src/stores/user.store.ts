import { IUser } from "@/interfaces";
import { create } from "zustand";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInAnonymously,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut
} from "@firebase/auth";
import { auth } from "@/config/firebase";
import { createUserIfNotExists } from "@/utils";
import { faker } from "@faker-js/faker";
import { LoginSchema, RegisterSchema } from "@/validations";

interface UserStore {
	user: IUser | null;
	isLoading: boolean;
	logout: () => Promise<void>;
	handleGoogleSignIn: () => Promise<void>;
	handleGuestSignIn: () => Promise<void>;
	login: (data: LoginSchema) => Promise<void>
	register: (data: RegisterSchema) => Promise<void>
	set: {
		(partial: (UserStore | Partial<UserStore> | ((state: UserStore) => (UserStore | Partial<UserStore>))), replace?: false): void
		(state: (UserStore | ((state: UserStore) => UserStore)), replace: true): void
	}
}

export const useUserStore = create<UserStore>((set) => ({
	user: null,
	isLoading: false,

	handleGoogleSignIn: async () => {
		try {
			const provider = new GoogleAuthProvider()
			const { user } = await signInWithPopup(auth, provider);

			const newUser: IUser = {
				id: user.uid,
				username: faker.internet.username(),
				theme: 'dark',
				email: user.email,
			}

			await createUserIfNotExists(user, newUser);
		} catch (err) {
			console.error("Google login error", err);
		}
	},

	handleGuestSignIn: async () => {
		try {
			const { user } = await signInAnonymously(auth);

			const newUser: IUser = {
				id: user.uid,
				username: faker.internet.username(),
				email: null,
				theme: 'dark',
			}

			await createUserIfNotExists(user, newUser);
		} catch (err) {
			console.error("Guest login error", err);
		}
	},

	login: async (data) => {
		try {
			await signInWithEmailAndPassword(auth, data.email, data.password)
		} catch (error) {
			console.log("Login failed", error)
		} finally {
			set({ isLoading: false })
		}
	},

	register: async (data) => {
		try {
			const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password)

			const newUser: IUser = {
				id: user.uid,
				email: data.email,
				theme: 'dark',
				username: data.username
			}

			await createUserIfNotExists(user, newUser)
		} catch (error) {
			console.log("Register failed: ", error)
		} finally {
			set({ isLoading: false })
		}
	},

	logout: async () => {
		set({ isLoading: true })
		await signOut(auth)
		set({ isLoading: false, user: null })
	},

	set,
}))
