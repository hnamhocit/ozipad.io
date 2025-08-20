import {Button} from "@heroui/button";
import {Image} from "@heroui/image";
import Link from "next/link";
import {useUserStore} from "@/stores";

const Others = () => {
	const { handleGuestSignIn, handleGoogleSignIn } = useUserStore()

	return (
		<>
			<div>
				<div className="flex items-center gap-3 mb-1">
					<div className="flex-1 h-[2px] bg-gray-700"></div>
					<div className="shrink-0">OR</div>
					<div className="flex-1 h-[2px] bg-gray-700"></div>
				</div>

				<div className='space-y-2'>
					<Button
						onPress={handleGuestSignIn}
						variant='flat'
						fullWidth
						radius='full'
						startContent={
						<Image src='/auth/guest.svg' alt='User' />
					}>
						Continue as a Guest
					</Button>

					<Button
						onPress={handleGoogleSignIn}
						variant='flat'
						fullWidth
						radius='full'
						startContent={
						<Image src='/auth/google.svg' alt='Google' />
					}>
						Continue with Google
					</Button>
				</div>
			</div>


			<div className="text-center text-sm">
				By signing in, you agree to our <Link href='/terms-of-service' className='text-primary underline'>Terms of Service</Link> and <Link href='/privacy-policy' className='text-primary underline'>Privacy Policy</Link>.
			</div>
		</>
	)
}
export default Others
