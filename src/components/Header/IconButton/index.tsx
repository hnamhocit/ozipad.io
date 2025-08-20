"use client"

import {ButtonProps, Image} from "@heroui/react";
import {FC, memo} from "react";
import {Button} from "@heroui/button";

interface IconButtonProps extends ButtonProps {
	name: string;
}

const IconButton:FC<IconButtonProps> = ({name, ...props}) => {
	return (
		<Button size='sm' variant='light' isIconOnly>
			<Image src={`/main/${name}.svg`} alt={name} width={18} height={18} className='rounded-none' />
		</Button>
	)
}
export default memo(IconButton)
