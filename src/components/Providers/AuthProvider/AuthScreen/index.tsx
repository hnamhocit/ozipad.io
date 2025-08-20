import {ReactNode, useState} from 'react'
import {Image} from "@heroui/image";

import Register from "./Register";
import Login from "./Login";
import Others from "./Others";
import ForgotPassword from "./ForgotPassword";
import clsx from "clsx";
import {Button} from "@heroui/react";

const AuthScreen = () => {
	const [currPage, setCurrPage] = useState('login');

	const toggleIsLogin = () => setCurrPage(currPage === 'login' ? 'register' : 'login');
	const handleLogin = () => setCurrPage('login')
	const handleForgotPassword = () => setCurrPage('forgotPassword')

	const render = (a: ReactNode, b: ReactNode, c?: ReactNode) => {
		switch (currPage) {
			case 'login':
				return a
			case 'register':
				return b
			default:
				return c
		}
	}

	return (
		<div className='bg-primary h-screen relative overflow-hidden'>
			<div className="h-1/5 flex items-center justify-around px-4">
				<div className='space-y-2 text-white'>
					<div className='text-3xl md:text-4xl font-semibold'>
						OziPad.io
					</div>

					<div className='md:text-lg'>
						Quick, Safe, Smart Notes Tools
					</div>
				</div>

				<div>
					<Image src='/auth/decor.svg' alt='Auth decorator' className='translate-y-7' height={180} />
				</div>
			</div>

			<div className="absolute bottom-0 left-0 w-full h-4/5 py-4 space-y-4 rounded-t-4xl bg-dark z-10 overflow-y-scroll scrollbar-hide">
				{currPage !== 'login' && (
					<Button onPress={handleLogin} isIconOnly variant='light' className="absolute top-7 left-7">
						<Image src='/auth/caret-left.svg' alt='Caret left' />
					</Button>
				)}

				<div className={clsx("text-center", currPage !== 'login' && 'space-y-2')}>
					<div className='text-3xl md:text-4xl font-semibold text-primary'>
						{render('Welcome Back','Sign Up', 'Forgot Password')}
					</div>

					<div className='md:text-lg'>
						{render('Log in with your Oziny account', 'Create' +
							' your' +
							' new account', 'Enter email address')}
					</div>
				</div>

				<div className="w-sm mx-auto space-y-4">
					{render(<Login onForgotPassword={handleForgotPassword} />, <Register />, <ForgotPassword />)}

					{currPage !== 'forgotPassword' && (
						<div className="text-center text-sm">
							{render("Don't have", "Already have")} an account?{' '}

							<button
								className='text-primary font-medium hover:underline'
								onClick={toggleIsLogin}
							>
								{render("Register", "Login")}
							</button>
						</div>
					)}


					{currPage === 'login' && <Others />}
				</div>
			</div>
		</div>
	)
}
export default AuthScreen
