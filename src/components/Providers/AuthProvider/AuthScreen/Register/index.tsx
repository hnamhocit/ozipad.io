import { Button, Input } from "@heroui/react";
import InputPassword from "@/components/InputPassword";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, registerSchema } from "@/validations";
import FormGroup from "@/components/FormGroup";
import { useUserStore } from "@/stores";

const Register = () => {
	const { register } = useUserStore()

	const { handleSubmit, formState: { errors }, control } = useForm<RegisterSchema>({
		resolver: zodResolver(registerSchema),
		mode: "onChange"
	})
	return (
		<form className='space-y-4' onSubmit={handleSubmit((register))}>
			<div className="space-y-2">
				<Controller
					control={control}
					name="username"
					render={({ field: { value, onChange } }) => (
						<FormGroup
							value={value}
							onValueChange={onChange}
							placeholder='Username'
							message={errors.username?.message}
							endContent={`${value?.length}/12`}
						/>
					)}
				/>

				<Controller
					control={control}
					name="email"
					render={({ field: { value, onChange } }) => (
						<FormGroup
							value={value}
							onValueChange={onChange}
							placeholder='example@gmail.com'
							message={errors.email?.message}
						/>
					)}
				/>

				<Controller
					control={control}
					name="password"
					render={({ field: { value, onChange } }) => (
						<FormGroup
							type="password"
							value={value}
							onValueChange={onChange}
							placeholder='Enter password'
							message={errors.password?.message}
						/>
					)}
				/>

				<Controller
					control={control}
					name="confirmPassword"
					render={({ field: { value, onChange } }) => (
						<FormGroup
							type="password"
							value={value}
							onValueChange={onChange}
							placeholder='Confirm password'
							message={errors.confirmPassword?.message}
						/>
					)}
				/>
			</div>

			<Button type="submit" color='primary' radius='full' fullWidth>Next</Button>
		</form>
	)
}
export default Register
