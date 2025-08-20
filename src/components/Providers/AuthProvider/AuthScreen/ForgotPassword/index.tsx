import React from 'react'
import {Button, Input} from "@heroui/react";

const ForgotPassword = () => {
	return (
		<form className='space-y-4'>
			<Input placeholder='example@gmail.com' />

			<Button fullWidth color='primary' radius='full'>Next</Button>
		</form>
	)
}
export default ForgotPassword
