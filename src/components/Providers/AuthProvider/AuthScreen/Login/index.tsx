import { Button, Checkbox, Input } from "@heroui/react";
import InputPassword from "@/components/InputPassword";
import { FC, memo } from "react";
import { Controller, useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserStore } from "@/stores";
import FormGroup from "@/components/FormGroup";

interface LoginProps {
	onForgotPassword: () => void
}

const Login: FC<LoginProps> = ({ onForgotPassword }) => {
	const { login } = useUserStore()
	const { handleSubmit, formState: { errors }, control } = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
		mode: 'onChange'
	})

	return (
		<form className='space-y-4' onSubmit={handleSubmit(login)}>
			<div className="space-y-2">
				<Controller render={({ field: { value, onChange } }) => (
					<FormGroup
						type='email'
						placeholder='example@gmail.com'
						value={value}
						onValueChange={onChange}
						message={errors.email?.message}
					/>
				)} name='email' control={control} />

				<Controller control={control} name="password" render={({ field: { value, onChange } }) => (
					<FormGroup
						type='password'
						placeholder='Enter password'
						value={value}
						onValueChange={onChange}
						message={errors.password?.message}
					/>
				)} />

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
