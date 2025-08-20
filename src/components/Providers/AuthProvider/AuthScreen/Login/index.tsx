import {Button, Checkbox, Input} from "@heroui/react";
import InputPassword from "@/components/InputPassword";
import {FC, memo} from "react";

interface LoginProps {
	onForgotPassword: () => void
}

const Login:FC<LoginProps> = ({onForgotPassword}) => {
	return (
		<form className='space-y-4'>
			<div className="space-y-2">
				<Input type='email' placeholder='example@gmail.com' />

				<InputPassword placeholder='Enter password' />
			</div>

			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<Checkbox defaultSelected>
						Remember password
					</Checkbox>

					<button
						className='text-primary underline text-sm'
						type='button'
						onClick={onForgotPassword}
					>
						Forgot password?
					</button>
				</div>

				<Button
					radius='full'
					fullWidth
					color='primary'
					type='submit'
				>
					Login
				</Button>
			</div>

		</form>
	)
}
export default memo(Login)
