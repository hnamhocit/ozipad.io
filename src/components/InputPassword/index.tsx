import { FC, useState } from 'react'
import { InputProps } from "@heroui/input";
import { Button, Input } from "@heroui/react";
import { Image } from "@heroui/image";

const InputPassword: FC<InputProps> = (props) => {
	const [isShow, setIsShow] = useState(false);

	const toggleIsShow = () => setIsShow(!isShow);

	return (
		<Input
			{...props}
			type={isShow ? 'text' : 'password'}
			endContent={
				<Button isIconOnly variant={'light'} onPress={toggleIsShow}>
					{isShow
						? <Image src='/auth/eye.svg' alt='Eye' />
						: <Image src='/auth/eye-close.svg' alt='Eye close' />
					}
				</Button>
			}
		/>
	)
}
export default InputPassword
