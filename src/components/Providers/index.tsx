"use client"

import {ReactNode} from 'react'
import {HeroUIProvider} from "@heroui/system";

import AuthProvider from "@/components/Providers/AuthProvider";
import ThemeProvider from "@/components/Providers/ThemeProvider";

const Providers = ({children}: {children: ReactNode}) => {
	return (
		<HeroUIProvider>
			<ThemeProvider />

			<AuthProvider>
				{children}
			</AuthProvider>
		</HeroUIProvider>
	)
}
export default Providers
