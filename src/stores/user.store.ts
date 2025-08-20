import {IUser} from "@/interfaces";
import {create} from "zustand";

interface UserStore {
	user: IUser | null;
	isLoading: boolean;
}

export const useUserStore = create<UserStore>((set, get) => ({
	user: null,
	isLoading: false
}))