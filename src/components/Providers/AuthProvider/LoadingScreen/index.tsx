import React from 'react'
import {Image} from "@heroui/image";
import Center from "@/components/Center";

const LoadingScreen = () => {
	return (
		<Center className='bg-primary'>
			<div className='space-y-2'>
				<Image src='/auth/loading.svg' alt='Loading' />

				<div className="text-4xl font-semibold">
					OziPad.io
				</div>
			</div>

			<div className="absolute left-1/2 bottom-7 -translate-x-1/2 text-lg text-white">
				Quick, Safe, Smart Notes Tools
			</div>
		</Center>
	)
}
export default LoadingScreen
