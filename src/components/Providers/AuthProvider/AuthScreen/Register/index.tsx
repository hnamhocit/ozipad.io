import {Button, Input} from "@heroui/react";
import InputPassword from "@/components/InputPassword";

const Register = () => {
	return (
		<form className='space-y-4'>
			<div className="space-y-2">
				<Input placeholder='Username' />

				<Input placeholder='example@gmail.com' />

				<InputPassword placeholder='Enter password' />

				<InputPassword placeholder='Confirm password' />
			</div>

			<Button color='primary' radius='full' fullWidth>Next</Button>
		</form>
	)
}
export default Register
