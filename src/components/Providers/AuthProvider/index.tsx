import {ReactNode} from "react";

import {useUserStore} from "@/stores";
import LoadingScreen from "./LoadingScreen";

const AuthProvider = ({children}: {children: ReactNode}) => {
	const { isLoading, user } = useUserStore()

	if (isLoading) return <LoadingScreen />

	// if (!user) return <AuthScreen />

	return children
}

export default AuthProvider;