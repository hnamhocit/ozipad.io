import {useEffect} from 'react'
import {useThemeStore} from "@/stores";

const ThemeProvider = () => {
	const {theme} = useThemeStore();

	useEffect(() => {
		const el = document.documentElement
		if (theme === 'dark') el.classList.add('dark')
		else el.classList.remove('dark')
	}, [theme]);

	return null
}
export default ThemeProvider
