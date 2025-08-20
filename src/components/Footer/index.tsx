"use client"

import {Button, Divider} from "@heroui/react";
import {Image} from "@heroui/image";

const Footer = () => {
	return (
		<div className='fixed bottom-0 left-0 w-full h-12 bg-semidark'>
			<div className="container mx-auto px-4 flex items-center justify-between h-full">
				<div className="flex-1 flex items-center gap-3">
					<Button isIconOnly variant='light'>
						<Image src="/footer/global.svg" alt="Global" width={18} height={18} />
					</Button>

					<div className="flex items-center gap-1">
						<Button isIconOnly variant='light'>
							<Image src="/footer/view.svg" alt="Global" width={18} height={18} />
						</Button>

						<div>0</div>
					</div>
				</div>

				<div className="flex-1 flex items-center gap-3 justify-center">
					<div>
						My IP:14.241.224.54
					</div>

					<Divider orientation='vertical' className='h-6' />

					<div>
						<Image src="/footer/vietnam.svg" alt="Flag" className='rounded-none' />
					</div>
				</div>

				<div className="flex-1 flex items-center justify-end gap-3">
					<div>C: 0</div>

					<Divider orientation='vertical' className='h-6' />

					<div>Q: 0</div>

					<Divider orientation='vertical' className='h-6' />

					<div>S: 0</div>

					<Divider orientation='vertical' className='h-6' />

					<div>L: 0</div>
				</div>
			</div>
		</div>
	)
}
export default Footer
