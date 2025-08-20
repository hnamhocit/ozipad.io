import {Theme} from "@/interfaces";
import {create} from "zustand";

interface ThemeStore {
	theme: Theme
	toggleTheme: () => void
	setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
	theme: 'dark',
	toggleTheme: () => {
		const currTheme = get().theme
		set({theme: currTheme === 'light' ? 'dark' : 'light'})
	},
	setTheme: (theme) => set({theme}),
}))